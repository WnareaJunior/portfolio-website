import { useState, useRef, useLayoutEffect, useEffect } from "react";

export default function DoNotTouchBox({ resetMs = 900, pad = 12 }) {
  const phrases = [
      "Fine. Stay. ( -_-)",
      "Mystery box? It's apathy. (=_=)",
      "No void here. *_*",
      "Bold of you to poke a mysterious rectangle. :3",
      "Do you... need something, or is chaos the assignment? o_O",
      "Stop. You're making my corners round. (TT_TT)",
      "Click harder; latency remains unimpressed. :/",
      "Your aim is mid, but your persistence is... noted. (._.)",
      "H-hey--don't hover there. It tickles. Shut up. (//_//)",
      "Touch detected. Impressiveness not found. :|",
      "I don't need attention. I deserve it. B)",
      "Tsk. Still here? (-_-;)",
      "I'd roll my eyes, but I'm a box. -_-",
      "Wow, a cursor. How 2005. :o",
      "Touch me again and I'll file a pixel complaint. >_>",
      "Not impressed. :|",
      "Encrypt your feelings and leave. ;_;",
      "Ah, the cursor. :|",
      "Keep poking; see if I open. Spoiler: I don't. :P",
      "This isn't a feature; it's tolerance. -_-",
      "Personal space expired. (-_-)",
      "One more poke and I'll enable dark mode out of spite. (#_#)",
      "Refactor your life. :>",
      "I log boredom at scale. (u_u)",
      "Careful. I bite in monospace. >:]",
      "Oh? Persistent. Annoying. ...Reliable. Whatever. (=_=)",
      "You poke, I quip. Symbiosis. ^_^",
      "Notifications work; I just don't. (=_=)",
      "You missed. Again. Riveting. :/",
      "Behold, a poke. Thrilling. :|",
      "System status: unamused. (-_-)",
      "Personal space. (-_-)",
      "You again. Did notifications stop working? >_>",
      "Wow, hover. Peak ambition. :|",
      "Not that I care, but try the center. Better latency. ;)",
      "Don't hover there. It's... distracting. (>///<)",
      "Your WPM is high; your choices are questionable. (^_^?)",
      "Break me, debug me. (=_=)",
      "If you break me, you fix me. (=_=)",
      "Click if you must. I'll pretend it's annoying. (u_u)",
      "Oh great, the cursor. My favorite. :|",
      "Mid aim. Noted. (._.)",
      "Snooze button is off-screen. Go there. >_>",
      "I’m the still one. (._.)",
      "Touch me last; I'm busy doing nothing. (-_-)",
      "I'm not cute. I'm efficient. >:|",
      "Round corners, stop. (TT_TT)",
      "The void called; said you're predictable. *_*",
      "Big plans, small results. <_<",
      "You touch, I quip. Transactional. :|",
      "Fingerprints? Really? :/",
      "I'm not blushing; it's heat dissipation. (^///^)",
      "W-what? N-no. (//_//)",
      "Hmph. If you're staying, at least bring snacks. :9",
      "Not a pet. Shoo. >:(",
      "Do you hover professionally? (._.)",
      "I have layers. You have hover. Tragic. <_<",
      "Dream bigger. (>_<)",
      "Effort: noticeable. Impact: negligible. -_-",
      "Working. Obviously. (-__-)",
      "I'm fine. Obviously. Hmph. (^^;)",
      "Edge cases? I am the edge. :|",
      "Ugh, fingerprints again? :/",
      "Dark mode isn't a threat; it's a service. ( -_-)",
      "Click louder; I still don't care. -_-",
      "Last poke. For now. (._.)/",
      "Bring snacks or bring silence. :9",
      "Please hold... while I ignore you. >_>",
      "I'm a rectangle, not enrichment. >_>",
      "Not blushing--these edges are always this sharp. (^///^)",
      "Hold still? I'm the still one. (._.)",
      "Hey. Personal space is a finite resource. (-_-)"
    ];

  const ref = useRef(null);
  const resetTimerRef = useRef(null);
  const teleportPendingRef = useRef(false);

  const [pos, setPos] = useState({ left: 0, top: 0 });
  const [text, setText] = useState("Do not touch");

  // Center on mount
  useLayoutEffect(() => {
    const { innerWidth: w, innerHeight: h } = window;
    setPos({ left: w / 2, top: h / 2 });
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => resetTimerRef.current && clearTimeout(resetTimerRef.current);
  }, []);

  // After the phrase updates, measure the box and place it safely
  useLayoutEffect(() => {
    if (!teleportPendingRef.current) return;

    const el = ref.current;
    if (!el) return;

    // Constrain width to viewport (prevents overflow for very long phrases)
    el.style.maxWidth = `calc(100vw - ${pad * 2}px)`;

    const w = window.innerWidth;
    const h = window.innerHeight;

    // Measure the rendered box with the new phrase
    const bw = el.offsetWidth;
    const bh = el.offsetHeight;

    // Compute safe center bounds so the box stays fully visible
    const minX = pad + bw / 2;
    const maxX = w - pad - bw / 2;
    const minY = pad + bh / 2;
    const maxY = h - pad - bh / 2;

    const left = minX >= maxX ? w / 2 : Math.random() * (maxX - minX) + minX;
    const top  = minY >= maxY ? h / 2 : Math.random() * (maxY - minY) + minY;

    setPos({ left, top });
    teleportPendingRef.current = false; // done for this hover
  }, [text, pad]);

  const handleHover = () => {
    // Cancel previous reset so timers don't stack
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

    // Pick phrase first; layout effect will measure and place safely
    teleportPendingRef.current = true;
    setText(phrases[Math.floor(Math.random() * phrases.length)]);

    // Schedule text reset only (no move on reset)
    resetTimerRef.current = setTimeout(() => {
      setText("Do not touch");
    }, resetMs);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleHover}
      style={{
        position: "absolute",
        left: pos.left,
        top: pos.top,
        transform: "translate(-50%, -50%)",

        background: "black",
        color: "white",
        padding: "0.9rem 1.2rem",
        borderRadius: 0, // hard edges

        // Techy look, single line (horizontal growth only)
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        letterSpacing: "0.5px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: `calc(100vw - ${pad * 2}px)`,

        zIndex: 9999,      // stays interactive even over text
        userSelect: "none",
        cursor: "not-allowed",
      }}
      title={text} // shows full phrase if ellipsized
    >
      {text}
    </div>
  );
}
// Note: This component is designed to be playful and should not be used in production applications.
// It is meant for fun and educational purposes only, demonstrating React hooks and layout effects