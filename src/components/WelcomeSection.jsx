export default function WelcomeSection({ onNavigateToModern }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <main style={{ padding: "1rem" }}>
        <h1 className="text-4xl font-bold text-center">A trophy case of paradigm shifting projects</h1>
        <p className="mt-4 text-lg text-center">Under Construction :3</p>
        <p className="text-center">Check out my <a href="https://github.com/wnareajunior" target="_blank" rel="noopener noreferrer">GitHub</a> for projects.</p>
        
        <div className="text-center mt-6">
          <button 
            onClick={onNavigateToModern}
            className="relative text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all duration-200 text-lg font-medium group overflow-hidden px-4 py-2"
            style={{
              background: 'linear-gradient(45deg, transparent 49%, rgba(59, 130, 246, 0.1) 50%, transparent 51%)',
              backgroundSize: '20px 20px',
              animation: 'shimmer 2s infinite'
            }}
          >
            <style>{`
              @keyframes shimmer {
                0% { background-position: -20px 0; }
                100% { background-position: 40px 0; }
              }
              .hover-glow:hover {
                text-shadow: 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #3b82f6;
                transform: scale(1.05);
              }
            `}</style>
            <span className="relative z-10 hover-glow transition-all duration-300">
              ⚡ make it modern ⚡
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}