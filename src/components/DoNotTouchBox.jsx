import { useState, useRef, useLayoutEffect } from "react";

export default function DoNotTouchBox() {
  const phrases = [
    "Fine. Stay. ( -_-)",
    "Mystery box? It's apathy. (=_=)",
    "No void here. *_*",
    "Bold of you to poke a mysterious rectangle. :3",
    "Do you... need something, or is chaos the assignment? o_O",
    "Stop. You're making my corners round. (TT_TT)",
    "Click harder; latency remains unimpressed. :/",
    "Your aim is mid, but your persistence is... noted. (._.)",
    "H-hey--ticklish. (//_//)",
    "Touch detected. Impressiveness not found. :|",
    "I deserve attention. B)",
    "Tsk. Still here? (-_-;)",
    "I'd roll my eyes, but I'm a box. -_-",
    "How 2005. :o",
    "Pixel report filed. >_>",
    "Not impressed. :|",
    "Round corners, stop. (TT_TT)",
    "Encrypt your feelings and leave. ;_;",
    "Ah, the cursor. :|",
    "Rent due soon. $._.$",
    "Spectacular mediocrity. >:|",
    "Keep poking; see if I open. Spoiler: I don't. :P",
    "This isn't a feature; it's tolerance. -_-",
    "Personal space expired. (-_-)",
    "One more poke and I'll enable dark mode out of spite. (#_#)",
    "Refactor your life. :>",
    "I log boredom at scale. (u_u)",
    "Careful. I bite in monospace. >:]",
    "Persistent... whatever. (=_=)",
    "You poke, I quip. ^_^",
    "Notifications work; I just don't. (=_=)",
    "You missed. Again. Riveting. :/",
    "Bold poke. :3",
    "Behold, a poke. Thrilling. :|",
    "System status: unamused. (-_-)",
    "Personal space. (-_-)",
    "You again. Did notifications stop working? >_>",
    "Wow, hover. Peak ambition. :|",
    "Not that I care, but try the center. Better latency. ;)",
    "Don't hover there. It's... distracting. (>///<)",
    "High WPM, mid choices. (^_^?)",
    "Touch me again and I'll file a pixel complaint. >_>",
    "Break me, debug me. (=_=)",
    "If you break me, you fix me. (=_=)",
    "Click, I sigh. (u_u)",
    "Oh great, the cursor. My favorite. :|",
    "Mid aim. Noted. (._.)",
    "Snooze button is off-screen. Go there. >_>",
    "Click if you must. I'll pretend it's annoying. (u_u)",
    "I’m the still one. (._.)",
    "Touch me last; I'm busy doing nothing. (-_-)",
    "Not cute, efficient. >:|",
    "Wow, a cursor. How 2005. :o",
    "Still here? (-_-;)",
    "I don’t open. :P",
    "The void called; said you're predictable. *_*",
    "Big plans, small results. <_<",
    "Your WPM is high; your choices are questionable. (^_^?)",
    "You touch, I quip. Symbiosis. ^_^",
    "Fingerprints? Really? :/",
    "I'm not blushing; it's heat dissipation. (^///^)",
    "W-what? N-no. (//_//)",
    "Wow, a cursor. My favorite. :|",
    "Hmph. If you're staying, at least bring snacks. :9",
    "If you're bored, go refactor your life. :>",
    "Not a pet. Shoo. >:(",
    "Do you hover professionally? (._.)",
    "I have layers. You have hover. Tragic. <_<",
    "Dream bigger. (>_<)",
    "Effort: noticeable. Impact: negligible. -_-",
    "Working. Obviously. (-__-)",
    "I'm fine. Obviously. Hmph. (^^;)",
    "Edge cases? I am the edge. :|",
    "Not blushing. (^///^)",
    "Ugh, fingerprints again? :/",
    "Personal space. (-_-)",
    "Dark mode threat. (#_#)",
    "You missed. On purpose? Figures. -_-",
    "Click louder; I still don't care. -_-",
    "Last poke. For now. (._.)/",
    "You missed. -_-",
    "I have layers; none of them are interest. <_<",
    "Was that supposed to impress me? :|",
    "Bring snacks or bring silence. :9",
    "Please hold... while I ignore you. >_>",
    "I'm a rectangle, not enrichment. >_>",
    "I’m fine. Obviously. (^^;)",
    "Not blushing--these edges are always this sharp. (^///^)",
    "Hold still? I'm the still one. (._.)",
    "You poke, I quip. Transactional. :|",
    "Hey. Personal space is a finite resource. (-_-)",
    "Oh? Persistent. Annoying. ...Reliable. Whatever. (=_=)",
    "I'm not cute. I'm efficient. >:|",
    "Chaos or plan? o_O",
    "Center. Better latency. ;)",
    "I run on disdain and pixels. (-__)",
    "Dark mode isn't a threat; it's a service. ( -_-)",
    "Not impressed. :|",
    "Rent's due for all this hovering. $._.$"
  ];

  const ref = useRef(null);
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const [text, setText] = useState("Do not touch");

  // center on mount (after we can measure)
  useLayoutEffect(() => {
    const { innerWidth: w, innerHeight: h } = window;
    setPos({ left: w / 2, top: h / 2 });
  }, []);

  const teleportSafely = () => {
    const pad = 12;
    const { innerWidth: w, innerHeight: h } = window;

    const el = ref.current;
    const bw = el?.offsetWidth ?? 160;   // box width
    const bh = el?.offsetHeight ?? 48;   // box height (single line)

    const minX = pad + bw / 2;
    const maxX = w - pad - bw / 2;
    const minY = pad + bh / 2;
    const maxY = h - pad - bh / 2;

    // if box is larger than viewport, just center
    const left =
      minX >= maxX ? w / 2 : Math.random() * (maxX - minX) + minX;
    const top =
      minY >= maxY ? h / 2 : Math.random() * (maxY - minY) + minY;

    setPos({ left, top });
  };

  const handleHover = () => {
    setText(phrases[Math.floor(Math.random() * phrases.length)]);
    // wait for text to render so width is accurate, then clamp
    requestAnimationFrame(teleportSafely);
    setTimeout(() => setText("Do not touch"), 2500);
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
        borderRadius: 0,                   // hard edges
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        letterSpacing: "0.5px",
        whiteSpace: "nowrap",              // 👉 single line (horizontal growth)
        lineHeight: 1.2,                   // stable height
        userSelect: "none",
        cursor: "not-allowed",
        zIndex: 9999,                      // stays interactive over text
        pointerEvents: "auto",
      }}
    >
      {text}
    </div>
  );
}
