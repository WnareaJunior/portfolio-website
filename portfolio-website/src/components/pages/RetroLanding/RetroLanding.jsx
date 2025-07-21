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
