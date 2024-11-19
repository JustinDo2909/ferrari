"use client";
import { useEffect, useState } from "react";
import { RotatingContentProps } from "../../Type";


const RotatingContent = ({ items, render  } : RotatingContentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setFadeOut(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [items]);

  return render(items[currentIndex], fadeOut);
};

export default RotatingContent;
