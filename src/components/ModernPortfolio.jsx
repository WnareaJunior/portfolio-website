const projects = [
  {
    id: 1,
    title: "Panthalassa Buoy AI 🌊⚡",
    description: "Ocean wave forecasting for renewable energy. Machine learning models trained on Copernicus Marine and NOAA datasets predict wave activity and flag the best deployment sites for the 200-ft Panthalassa energy-harvesting buoy.",
    githubUrl: "https://github.com/WnareaJunior/wave-energy-forecasting-ai",
    image: "/images/projects/panthalassa.jpg",
    imageAlt: "Panthalassa dashboard showing data pipeline status and wave power analysis results"
  },
  {
    id: 2,
    title: "Chatbot SaaS Web Integration",
    description: "Drop-in AI chatbot for business websites. An embeddable widget with customizable behavior on a backend built to scale — add the script, configure the bot, done.",
    githubUrl: "https://github.com/WnareaJunior/chatbot-saas-web-",
    image: "/images/projects/chatbot.jpg",
    imageAlt: "ChatBot Pro landing page with an embedded chat widget"
  },
  {
    id: 3,
    title: "Mission Control Frontend 🚀",
    description: "Mission-control software for self-landing amateur rockets, built as a senior capstone with SEDS FIU. Live telemetry monitoring, stop/abort commands, and flight data recording.",
    githubUrl: "https://github.com/WnareaJunior/SEDS-FIU",
    image: "/images/projects/mission-control.jpg",
    imageAlt: "Mission control interface graphing live tank pressures and weights during a test"
  },
  {
    id: 4,
    title: "OpenCrib 🏠✨",
    description: "iOS app for hosting events and bringing people together — house shows, backyard parties, art pop-ups, workshops. Open your door to a community that cares.",
    githubUrl: "https://github.com/WnareaJunior/Open-Crib.Frontend",
    image: "/images/projects/opencrib.jpg",
    imageAlt: "Three OpenCrib iPhone screens: event map, host profile, and party creation form"
  }
];

export default function ModernPortfolio({ onBackToOriginal }) {
  return (
    <div className="bg-deep-950 text-white min-h-screen tracking-[0.01em]">
      {/* Modern Header */}
      <header className="bg-deep-900/95 border-b border-deep-700 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center">
            <span className="text-2xl font-bold type-heading">Wilson Narea</span>
            <nav className="space-x-6">
              <a href="#about" className="text-deep-400 hover:text-white transition-colors duration-200">About</a>
              <a href="#projects" className="text-deep-400 hover:text-white transition-colors duration-200">Projects</a>
              <a href="#contact" className="text-deep-400 hover:text-white transition-colors duration-200">Contact</a>
              <button 
                onClick={onBackToOriginal}
                className="text-deep-400 hover:text-white transition-colors duration-200"
              >
                ← Back to 1998
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.75rem,6vw+1rem,4.5rem)] font-bold type-display mb-6 text-white">
            Oceans, rockets, house parties.
          </h1>
          <p className="text-xl text-deep-200 mb-8 leading-relaxed">
            I'm Wilson Narea, a full-stack developer. I build wave-energy forecasting AI,
            rocket mission control, and community apps for iOS.
          </p>
          <a
            href="#projects"
            className="inline-block bg-white text-deep-950 hover:bg-deep-200 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-deep-900 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(1.875rem,2vw+1.25rem,2.5rem)] font-bold type-heading mb-8 text-center text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/profile.jpg"
              alt="Portrait of Wilson Narea"
              width="192"
              height="192"
              loading="lazy"
              className="w-48 h-48 rounded-xl object-cover mx-auto"
            />
            <p className="text-lg text-deep-200 leading-relaxed">
              I work across the stack — machine learning, web frontends, and native iOS.
              Recent work ranges from wave-energy forecasting models to mission-control
              software for student rocketry, with an events app on the side.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(1.875rem,2vw+1.25rem,2.5rem)] font-bold type-heading mb-12 text-center text-white">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-deep-900 rounded-xl overflow-hidden"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold type-heading mb-4 text-white">{project.title}</h3>
                    <p className="text-deep-200 mb-6 leading-relaxed">{project.description}</p>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-deep-400 hover:text-white transition-colors duration-200 group"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span className="font-semibold">View on GitHub</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-deep-900 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[clamp(1.875rem,2vw+1.25rem,2.5rem)] font-bold type-heading mb-8 text-white">Get In Touch</h2>
          <p className="text-xl text-deep-200 mb-8">
            Open to new opportunities and collaborations — LinkedIn is the fastest way to reach me.
          </p>
          <a
            href="https://www.linkedin.com/in/wilson-narea-b94941191/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-deep-950 hover:bg-deep-200 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-deep-700">
        <div className="max-w-6xl mx-auto text-center text-deep-400">
          <p>© {new Date().getFullYear()} Wilson Narea. Built with passion and lots of coffee</p>
        </div>
      </footer>
    </div>
  );
}