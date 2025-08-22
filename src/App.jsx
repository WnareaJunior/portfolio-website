import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import DoNotTouchBox from './components/DoNotTouchBox';
export default function App() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
    {/* Foreground content with higher zIndex */}
    <div style={{ position: "relative", zIndex: 1 }}>
      <Header />
      <WelcomeSection />
      <Footer />
    </div>

    {/* Mischievous box in background layer */}
    <DoNotTouchBox />
  </div>
      
  
  );
}

