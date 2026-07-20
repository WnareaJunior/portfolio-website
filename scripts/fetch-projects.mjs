#!/usr/bin/env node
// Fetches public repos + READMEs from GitHub and writes src/data/projects.json.
// Run locally with `node scripts/fetch-projects.mjs` or weekly via the
// update-projects workflow. Curation lives in scripts/projects.config.json.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(readFileSync(join(root, 'scripts/projects.config.json'), 'utf8'));

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'portfolio-website-updater',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${path}`);
  return res.json();
}

// Turn README markdown into a short plain-prose blurb.
function blurbFromReadme(markdown) {
  const stripped = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');

  const paragraphs = stripped
    .split(/\n\s*\n/)
    .map((p) =>
      p
        .split('\n')
        // drop headings, blockquotes, tables, rules, list items — keep prose
        .filter((line) => !/^\s*(#|>|\||[-*+]\s|\d+\.\s|[-=_*]{3,}\s*$)/.test(line))
        .join(' ')
        .replace(/[*_`~]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
    )
    .filter((p) => p.length >= 60);

  if (!paragraphs.length) return null;
  let blurb = paragraphs[0];
  if (blurb.length > 300) {
    const cut = blurb.slice(0, 300);
    blurb = `${cut.slice(0, Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(' ')))}…`.replace(/\.…$/, '.');
  }
  return blurb;
}

// "legal-intake-orchestrator" -> "Legal Intake Orchestrator"; leaves mixed-case names alone
function titleFromName(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w === w.toLowerCase() ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(' ');
}

const repos = await gh(`/users/${config.username}/repos?per_page=100`);

// Repos untouched for longer than maxAgeMonths fall off the site on the next
// weekly refresh. Pinned repos are exempt.
const cutoff = new Date();
cutoff.setMonth(cutoff.getMonth() - (config.maxAgeMonths ?? 1200));

const candidates = repos.filter(
  (r) =>
    !r.fork &&
    !r.archived &&
    !config.exclude.includes(r.name) &&
    ((config.pinned ?? []).includes(r.name) || new Date(r.pushed_at) >= cutoff)
);

const projects = [];
for (const repo of candidates) {
  const override = config.overrides[repo.name] ?? {};
  let blurb = null;
  const readme = await gh(`/repos/${config.username}/${repo.name}/readme`);
  if (readme?.content) {
    blurb = blurbFromReadme(Buffer.from(readme.content, 'base64').toString('utf8'));
  }
  const description = override.description ?? blurb ?? repo.description;
  if (!description) {
    console.log(`skipping ${repo.name}: no README prose and no description`);
    continue;
  }
  projects.push({
    name: repo.name,
    title: override.title ?? titleFromName(repo.name),
    description,
    githubUrl: repo.html_url,
    stars: repo.stargazers_count,
    language: repo.language,
    pushedAt: repo.pushed_at,
    image: override.image ?? `https://opengraph.githubassets.com/1/${config.username}/${repo.name}`,
    imageAlt: override.imageAlt ?? `GitHub preview card for ${repo.name}`,
  });
}

projects.push(...config.manual);

// Pinned repos first in config order, then starred repos (most stars at the
// top), then by recency.
const pinned = config.pinned ?? [];
const rank = (p) => {
  const i = pinned.indexOf(p.name);
  return i === -1 ? pinned.length : i;
};
projects.sort(
  (a, b) =>
    rank(a) - rank(b) ||
    (b.stars ?? 0) - (a.stars ?? 0) ||
    new Date(b.pushedAt ?? 0) - new Date(a.pushedAt ?? 0)
);

const outPath = join(root, 'src/data/projects.json');
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(projects, null, 2)}\n`);
console.log(`wrote ${projects.length} projects to src/data/projects.json`);
