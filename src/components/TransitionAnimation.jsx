export default function TransitionAnimation({ phase }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#000',
      zIndex: 10000,
      overflow: 'hidden'
    }}>

      {phase === 'rain' && (
        <>
          {Array.from({length: 20}).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${i * 5}%`,
                top: '-100px',
                width: '2px',
                height: '100vh',
                background: 'linear-gradient(transparent, #00ff00, transparent)',
                animation: `rain ${0.5 + Math.random() * 0.5}s linear infinite`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            />
          ))}
          <style>{`
            @keyframes rain {
              to { transform: translateY(100vh); }
            }
          `}</style>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#00ff00',
            fontSize: '18px',
            fontFamily: 'monospace',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            DOWNLOADING :P...<br/>
            ████████████ 100%
          </div>
        </>
      )}

      {phase === 'crt' && (
        <div style={{
          width: '100%',
          height: '100%',
          background: '#ffffff',
          boxShadow: '0 0 120px 30px rgba(255, 255, 255, 0.5)',
          animation: 'crtOff 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards'
        }}>
          <style>{`
            @keyframes crtOff {
              0%   { transform: scale(1, 1); opacity: 1; }
              55%  { transform: scale(1, 0.006); opacity: 1; }
              85%  { transform: scale(0.08, 0.004); opacity: 1; }
              100% { transform: scale(0, 0.002); opacity: 0; }
            }
          `}</style>
        </div>
      )}

      {phase === 'burst' && (
        <div style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
          animation: 'explode 0.4s ease-out forwards'
        }}>
          <style>{`
            @keyframes explode {
              0% {
                transform: scale(0);
                opacity: 1;
              }
              100% {
                transform: scale(10);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
