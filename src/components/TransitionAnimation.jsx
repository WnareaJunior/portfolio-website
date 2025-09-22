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
      {phase === 1 && (
        <div style={{
          width: '100%',
          height: '100%',
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )
          `,
          animation: 'glitch 0.1s infinite'
        }}>
          <style>{`
            @keyframes glitch {
              0% { transform: translate(0); }
              20% { transform: translate(-2px, 2px); }
              40% { transform: translate(-2px, -2px); }
              60% { transform: translate(2px, 2px); }
              80% { transform: translate(2px, -2px); }
              100% { transform: translate(0); }
            }
          `}</style>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#00ff00',
            fontSize: '24px',
            fontFamily: 'monospace',
            textShadow: '0 0 20px #00ff00',
            letterSpacing: '4px'
          }}>
            INITIALIZING...
          </div>
        </div>
      )}
      
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
            DOWNLOADING FUTURE...<br/>
            ████████████ 100%
          </div>
        </div>
      )}
      
      {phase === 3 && (
        <div style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, #1a1a2e 0%, #000 70%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '200px',
            height: '200px',
            border: '4px solid transparent',
            borderTop: '4px solid #3b82f6',
            borderRight: '4px solid #8b5cf6',
            borderRadius: '50%',
            animation: 'spin 0.5s linear infinite',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              border: '2px solid transparent',
              borderLeft: '2px solid #06b6d4',
              borderBottom: '2px solid #10b981',
              borderRadius: '50%',
              animation: 'spin 0.3s linear infinite reverse'
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#3b82f6',
              fontSize: '14px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              textShadow: '0 0 10px #3b82f6'
            }}>
              LOADING
            </div>
          </div>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
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
