# Populate Portfolio Files Script
Write-Host "📄 Populating portfolio files..." -ForegroundColor Green

# Button component
Write-Host "Creating Button component..." -ForegroundColor Yellow
@'
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'retro']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default Button;
'@ | Out-File -FilePath "src\components\common\Button\Button.jsx" -Encoding utf8

@'
.button {
  font-family: 'Courier New', monospace;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
}

.retro {
  background-color: #fff;
  color: #000;
  border: 3px solid #000;
  padding: 20px 60px;
  font-size: 3rem;
  letter-spacing: 3px;
}

.retro:hover {
  background-color: #000;
  color: #fff;
  border-color: #fff;
}

.primary {
  background-color: #0066cc;
  color: #fff;
  border: 2px solid #0066cc;
  padding: 12px 24px;
  font-size: 1rem;
}

.medium {
  padding: 12px 24px;
  font-size: 1rem;
}

.large {
  padding: 20px 60px;
  font-size: 3rem;
  letter-spacing: 3px;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
'@ | Out-File -FilePath "src\components\common\Button\Button.module.css" -Encoding utf8

@'
export { default } from './Button';
'@ | Out-File -FilePath "src\components\common\Button\index.js" -Encoding utf8

# Custom hook
Write-Host "Creating animation hook..." -ForegroundColor Yellow
@'
import { useState, useCallback } from 'react';

export const useDoorAnimation = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [buttonFaded, setButtonFaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openDoors = useCallback(() => {
    console.log('Door animation initiated');
    setButtonFaded(true);
    setTimeout(() => {
      setDoorsOpen(true);
    }, 300);
  }, []);

  return {
    doorsOpen,
    buttonFaded,
    isHovered,
    setIsHovered,
    openDoors
  };
};
'@ | Out-File -FilePath "src\hooks\useAnimation.js" -Encoding utf8

# CSS Variables
Write-Host "Creating CSS variables..." -ForegroundColor Yellow
@'
:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-medium: #888888;
  --color-gray-dark: #444444;
  --font-monospace: 'Courier New', monospace;
}
'@ | Out-File -FilePath "src\styles\variables.css" -Encoding utf8

# Constants
Write-Host "Creating constants..." -ForegroundColor Yellow
@'
export const ANIMATION_DELAYS = {
  BUTTON_TO_DOOR: 300,
  DOOR_TRANSITION: 1500,
  FADE_TRANSITION: 500,
};
'@ | Out-File -FilePath "src\utils\constants.js" -Encoding utf8

# RetroLanding component
Write-Host "Creating RetroLanding component..." -ForegroundColor Yellow
@'
import React from 'react';
import { useDoorAnimation } from '../../../hooks/useAnimation';
import Button from '../../common/Button';
import styles from './RetroLanding.module.css';

const RetroLanding = () => {
  const { doorsOpen, buttonFaded, isHovered, setIsHovered, openDoors } = useDoorAnimation();

  return (
    <div className={styles.container}>
      <div className={styles.devIndicator}>CSS IS WORKING</div>
      <div className={styles.middleLine} />

      <Button
        variant="retro"
        size="large"
        onClick={openDoors}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${styles.openButton} ${buttonFaded ? styles.fadeOut : ''}`}
        disabled={buttonFaded}
      >
        OPEN
      </Button>

      <div className={`${styles.door} ${styles.doorLeft} ${doorsOpen ? styles.open : ''}`} />
      <div className={`${styles.door} ${styles.doorRight} ${doorsOpen ? styles.open : ''}`} />

      <main className={styles.comingSoon}>
        <h1 className={styles.title}>Coming Soon...</h1>
        <p className={styles.author}>By: Wilson D. Narea</p>
      </main>
    </div>
  );
};

export default RetroLanding;
'@ | Out-File -FilePath "src\components\pages\RetroLanding\RetroLanding.jsx" -Encoding utf8

@'
.container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-monospace);
  background-color: var(--color-black);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.devIndicator {
  color: var(--color-white);
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 300;
}

.middleLine {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-gray-dark);
  transform: translateY(-50%);
  z-index: 50;
}

.openButton {
  position: relative;
  z-index: 200;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.openButton.fadeOut {
  opacity: 0;
  pointer-events: none;
}

.door {
  position: fixed;
  top: 0;
  width: 50%;
  height: 100vh;
  background-color: var(--color-black);
  z-index: 100;
  transition: transform 1.5s ease;
}

.doorLeft {
  left: 0;
  transform: translateX(0);
  border-right: 1px solid var(--color-gray-dark);
}

.doorRight {
  right: 0;
  transform: translateX(0);
  border-left: 1px solid var(--color-gray-dark);
}

.doorLeft.open {
  transform: translateX(-100%);
}

.doorRight.open {
  transform: translateX(100%);
}

.comingSoon {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  opacity: 1;
}

.title {
  color: var(--color-white);
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: var(--font-monospace);
}

.author {
  color: var(--color-gray-medium);
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: var(--font-monospace);
  margin: 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
}
'@ | Out-File -FilePath "src\components\pages\RetroLanding\RetroLanding.module.css" -Encoding utf8

@'
export { default } from './RetroLanding';
'@ | Out-File -FilePath "src\components\pages\RetroLanding\index.js" -Encoding utf8

# Update App.js
Write-Host "Updating App.js..." -ForegroundColor Yellow
@'
import React from 'react';
import RetroLanding from './components/pages/RetroLanding';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <RetroLanding />
    </div>
  );
}

export default App;
'@ | Out-File -FilePath "src\App.js" -Encoding utf8

# Update App.css
@'
.App {
  margin: 0;
  padding: 0;
  height: 100vh;
}

* {
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
'@ | Out-File -FilePath "src\App.css" -Encoding utf8

Write-Host "✅ All files populated successfully!" -ForegroundColor Green
Write-Host "🔄 Your React app should automatically reload and show the retro door animation!" -ForegroundColor Cyan
Write-Host "🎯 Check your browser - you should see a black screen with an OPEN button!" -ForegroundColor Yellow