export default function WelcomeSection({ onNavigateToModern }) {
  return (
    <div className="min-h-screen bg-gray-100 p-4" style={{ 
      fontFamily: 'Times New Roman, serif',
      background: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
      backgroundSize: '4px 4px',
      backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px'
    }}>
      <div className="flex">
        {/* Main content */}
        <div className="max-w-4xl flex-1">
          {/* Animated GIF-style header */}
          <div className="text-center mb-6">
            <div className="bg-blue-600 text-white p-2 border-2 border-blue-800 inline-block" style={{
              background: 'linear-gradient(45deg, #0066cc, #004499)',
              animation: 'blink 2s infinite'
            }}>
              <span className="text-lg font-bold">★ WELCOME TO MY WEBSITE ★</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-black mb-6" style={{ 
            fontFamily: 'Times New Roman, serif',
            textShadow: '2px 2px 0px #cccccc'
          }}>
            A trophy case of paradigm shifting projects
          </h1>
          
          {/* Visitor counter style box */}
          <div className="bg-yellow-200 border-2 border-yellow-600 p-3 mb-6 inline-block">
            <p className="text-sm font-bold text-black">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                   alt="new" className="inline w-8 h-4 bg-red-600 mr-2" />
              You are visitor #12,847
            </p>
          </div>

          <p className="text-base text-black mb-4" style={{ lineHeight: '1.8' }}>
            Check out my{' '}
            <a 
              href="https://github.com/wnareajunior" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-red-600"
              style={{ textDecoration: 'underline' }}
            >
              GitHub
            </a>
            {' '}for projects.
          </p>

          <p className="text-base text-black mb-8">
            <button 
              onClick={onNavigateToModern}
              className="text-blue-600 underline hover:text-red-600 bg-transparent border-none p-0 cursor-pointer"
              style={{ textDecoration: 'underline', fontFamily: 'Times New Roman, serif' }}
            >
              Developers hate this one simple trick, CLICK HERE NOW!
            </button>
          </p>

          {/* Early web elements */}
          <div className="border-t-2 border-dashed border-gray-500 pt-6 mt-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-red-600 text-white px-2 py-1 text-xs font-bold border border-red-800">
                HOT!
              </div>
              <span className="text-sm text-black">Last updated: January 22, 2025</span>
            </div>
            
            <div className="bg-gray-200 border-2 border-gray-400 p-4 mb-6" style={{
              background: 'repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #e0e0e0 10px, #e0e0e0 20px)'
            }}>
              <p className="text-xs text-gray-700 italic">
                This site is best viewed with Netscape Navigator 4.0+ or Internet Explorer 5.0+ 
                at 800x600 resolution with thousands of colors.
              </p>
            </div>
          </div>

          {/* Footer with early web styling */}
          <div className="text-center border-t border-gray-400 pt-4 mt-8">
            <p className="text-xs text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
              © 2025 My Portfolio | 
              <span className="mx-2">|</span>
              <a href="mailto:webmaster@example.com" className="text-blue-600 underline hover:text-red-600">
                Email Webmaster
              </a>
              <span className="mx-2">|</span>
              <span>Page created with Notepad</span>
            </p>
            
            {/* Classic "best viewed with" buttons */}
            <div className="flex justify-center space-x-2 mt-2">
              <div className="bg-blue-800 text-white text-xs px-2 py-1 border border-blue-900">
                Netscape Now!
              </div>
              <div className="bg-green-700 text-white text-xs px-2 py-1 border border-green-800">
                Valid HTML 3.2
              </div>
            </div>
          </div>

          <style>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0.7; }
            }
          `}</style>
        </div>

        {/* Right sidebar with GIFs */}
        <div className="flex flex-col space-y-4 ml-8 mt-16">
          <img src="/images/fire.gif" alt="Fire" className="w-24 h-auto" />
          <img src="/images/dolphins.gif" alt="Dolphins" className="w-24 h-auto" />
        </div>
      </div>
    </div>
  );
}