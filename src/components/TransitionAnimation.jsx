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
      
      {phase === 2 && (
        <div style={{
          width: '100%',
          height: '100%',
          background: '#000',
          position: 'relative',
          overflow: 'hidden'
        }}>
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
        </div>
      )}
      
      
      
      {phase === 4 && (
        <div style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
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
