const projects = [
  {
    id: 1,
    title: "Panthalassa Buoy AI 🌊⚡",
    description: "AI-powered ocean wave forecasting for renewable energy. Uses advanced machine learning trained on Copernicus Marine and NOAA datasets to predict wave activity and identify optimal deployment sites for the 200-ft Panthalassa energy-harvesting buoy.",
    githubUrl: "https://github.com/WnareaJunior/wave-energy-forecasting-ai",
    image: "/public/images/projects/panthalassa.jpg" 
  },
  {
    id: 2,
    title: "Chatbot SaaS Web Integration",
    description: "Seamless AI chatbot integration for businesses looking to enhance customer engagement and streamline communication. Features easy integration, customizable behavior, and scalable architecture for businesses of all sizes.",
    githubUrl: "https://github.com/WnareaJunior/chatbot-saas-web-",
    image: "/images/projects/chatbot.jpg" 
  },
  {
    id: 3,
    title: "Mission Control Frontend 🚀",
    description: "Frontend software for a Mission Control system developed as part of a senior Capstone project. Features real-time telemetry monitoring, control interface for stop/abort commands, and flight data recording for self-landing amateur rocket systems.",
    githubUrl: "https://github.com/WnareaJunior/SEDS-FIU",
    image: "/images/projects/mission-control.jpg" 
  },
  {
    id: 4,
    title: "OpenCrib 🏠✨",
    description: "iOS-first platform for hosting events and bringing people together. From house shows and backyard parties to art pop-ups and workshops, OpenCrib makes it easy to open your door to a community that cares.",
    githubUrl: "https://github.com/WnareaJunior/Open-Crib.Frontend",
    image: "/images/projects/opencrib.jpg" 
  }
];

export default function ModernPortfolio({ onBackToOriginal }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Modern Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-400">Wilson Narea</h1>
            <nav className="space-x-6">
              <a href="#about" className="hover:text-blue-400 transition-colors duration-200">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors duration-200">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
              <button 
                onClick={onBackToOriginal}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                ← Back
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Building the Future
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Full-stack developer specializing in AI, ocean tech, and innovative solutions that make a difference.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border border-blue-600 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">About Me</h2>
          <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-850 transition-colors duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                
                <div className="w-48 h-48 rounded-xl mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Wilson Narea"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-700 rounded-xl flex items-center justify-center text-gray-400" style={{display: 'none'}}>
                    [Profile Photo]
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Passionate full-stack developer with expertise in AI, machine learning, and innovative web technologies. 
                  I love building solutions that solve real-world problems, from ocean energy forecasting to community platforms.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300">Machine Learning & AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300">Ocean Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300">iOS Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    {/* UPDATED: Project images with fallback */}
                    <div className="w-full h-64 bg-gray-700 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.target.src = `https://via.placeholder.com/400x250/1e293b/3b82f6?text=${encodeURIComponent(project.title.split(' ')[0])}`;
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="space-y-3">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                      >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'd love to hear from you!
          </p>
          <a 
            href="mailto:wilsondev27@outlook.com"
            className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>wilsondev27@outlook.com</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Wilson Narea. Built with passion and lots of coffee </p>
        </div>
      </footer>
    </div>
  );
}