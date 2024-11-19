import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LazyLoadProps } from "../../Type";

const LazyLoad = ({
  children,
  threshold = 0.2, // Default threshold is 20%
  animationDuration = 0.5,
  initialStyle = { opacity: 0, y: 50 }, // Initial hidden state
  animateStyle = { opacity: 1, y: 0 }, // Target state when in view
}: LazyLoadProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={initialStyle}
      animate={inView ? animateStyle : initialStyle}
      transition={{ duration: animationDuration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default LazyLoad;
