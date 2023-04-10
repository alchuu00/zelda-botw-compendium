import React, { useEffect } from "react";
import hoverSound from "../assets/hover.mp3";

function HoverSound() {
  useEffect(() => {
    const hoverAudio = new Audio(hoverSound);

    const handleHover = (event) => {
      hoverAudio.currentTime = 0;
      hoverAudio.play();
    };

    const itemContainers = document.querySelectorAll('.item-container');
    itemContainers.forEach((itemContainer) => {
      itemContainer.addEventListener('mouseover', handleHover);
    });

    return () => {
      itemContainers.forEach((itemContainer) => {
        itemContainer.removeEventListener('mouseover', handleHover);
      });
    };
  }, []);

  return null;
}

export default HoverSound;
