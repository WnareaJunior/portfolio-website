import { useState, useEffect } from 'react';
import WelcomeSection from './components/WelcomeSection';
import DoNotTouchBox from './components/DoNotTouchBox';
import ModernPortfolio from './components/ModernPortfolio';
import TransitionAnimation from './components/TransitionAnimation';

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [currentView, setCurrentView] = useState('original'); // 'original', 'transitioning', 'reversing', or 'modern'
  const [transitionPhase, setTransitionPhase] = useState('rain');

  // Each act starts at the top; instant to bypass the global smooth-scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  const handleModernTransition = () => {
    if (reducedMotion()) {
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

  const handleBackToOriginal = () => {
    if (reducedMotion()) {
      setCurrentView('original');
      return;
    }

    // CRT power-off: the modern page switches off like a 1998 monitor
    setCurrentView('reversing');
    setTimeout(() => setCurrentView('original'), 900);
  };

  if (currentView === 'transitioning') {
    return <TransitionAnimation phase={transitionPhase} />;
  }

  if (currentView === 'reversing') {
    return <TransitionAnimation phase="crt" />;
  }

  if (currentView === 'modern') {
    return <ModernPortfolio onBackToOriginal={handleBackToOriginal} />;
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
