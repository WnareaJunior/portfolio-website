# Navigate to your portfolio folder
cd portfolio-website

# Fix App.js
@"
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
"@ | Set-Content -Path "src\App.js" -Encoding UTF8

# Fix Button.jsx  
@"
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
"@ | Set-Content -Path "src\components\common\Button\Button.jsx" -Encoding UTF8

# Fix Button index.js
@"
export { default } from './Button';
"@ | Set-Content -Path "src\components\common\Button\index.js" -Encoding UTF8

# Fix RetroLanding.jsx (removed unused isHovered)
@"
import React from 'react';
import { useDoorAnimation } from '../../../hooks/useAnimation';
import Button from '../../common/Button';
import styles from './RetroLanding.module.css';

const RetroLanding = () => {
  const { doorsOpen, buttonFaded, setIsHovered, openDoors } = useDoorAnimation();

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
"@ | Set-Content -Path "src\components\pages\RetroLanding\RetroLanding.jsx" -Encoding UTF8

# Fix RetroLanding index.js
@"
export { default } from './RetroLanding';
"@ | Set-Content -Path "src\components\pages\RetroLanding\index.js" -Encoding UTF8

# Fix useAnimation.js
@"
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
"@ | Set-Content -Path "src\hooks\useAnimation.js" -Encoding UTF8

# Test the build
npm run build