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
