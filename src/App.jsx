import { useState } from 'react';
import WelcomeSection from './components/WelcomeSection';
import DoNotTouchBox from './components/DoNotTouchBox';
import ModernPortfolio from './components/ModernPortfolio';
import TransitionAnimation from './components/TransitionAnimation';

export default function App() {
  const [currentView, setCurrentView] = useState('original'); // 'original', 'transitioning', or 'modern'
  const [transitionPhase, setTransitionPhase] = useState('rain');

  const handleModernTransition = () => {
    // Respect reduced motion: skip the animation entirely
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrentView('modern');
      return;
    }

    setCurrentView('transitioning');
    setTransitionPhase('rain');

    setTimeout(() => setTransitionPhase('burst'), 1400);
    setTimeout(() => {
      setCurrentView('modern');
      setTransitionPhase('rain');
    }, 1800);
  };

  if (currentView === 'transitioning') {
    return <TransitionAnimation phase={transitionPhase} />;
  }

  if (currentView === 'modern') {
    return <ModernPortfolio onBackToOriginal={() => setCurrentView('original')} />;
  }

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {/* Foreground content with higher zIndex */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <WelcomeSection onNavigateToModern={handleModernTransition} />
      </div>

      {/* Mischievous box in background layer */}
      <DoNotTouchBox />
    </div>
  );
}
