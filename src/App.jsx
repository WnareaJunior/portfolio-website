import { useState } from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import DoNotTouchBox from './components/DoNotTouchBox';
import ModernPortfolio from './components/ModernPortfolio';
import TransitionAnimation from './components/TransitionAnimation';

export default function App() {
  const [currentView, setCurrentView] = useState('original'); // 'original', 'transitioning', or 'modern'
  const [transitionPhase, setTransitionPhase] = useState(0); // 0-4 for different animation phases
  
  const handleModernTransition = () => {
    setCurrentView('transitioning');
    
    // Phase 1: Screen glitch/static (500ms)
    setTimeout(() => setTransitionPhase(1), 100);
    
    // Phase 2: Matrix-style code rain (800ms)
    setTimeout(() => setTransitionPhase(2), 600);
    
    // Phase 3: Spinning loading portal (600ms)
    setTimeout(() => setTransitionPhase(3), 1400);
    
    // Phase 4: Final explosion/reveal (400ms)
    setTimeout(() => setTransitionPhase(4), 2000);
    
    // Complete transition to modern view
    setTimeout(() => {
      setCurrentView('modern');
      setTransitionPhase(0);
    }, 2400);
  };

  // Show transition animation
  if (currentView === 'transitioning') {
    return <TransitionAnimation phase={transitionPhase} />;
  }

  // Show modern portfolio
  if (currentView === 'modern') {
    return <ModernPortfolio onBackToOriginal={() => setCurrentView('original')} />;
  }

  // Show original portfolio
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {/* Foreground content with higher zIndex */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <WelcomeSection onNavigateToModern={handleModernTransition} />
        <Footer />
      </div>

      {/* Mischievous box in background layer */}
      <DoNotTouchBox />
    </div>
  );
}
