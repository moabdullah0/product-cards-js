export const heroAnimations = {
    initial: { opacity: 0, y: 50 },
    animate: (isInView) => ({
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 50,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    })
  };
  
  export const heroContentAnimations = {
    initial: { opacity: 0, x: -50 },
    animate: (isInView) => ({
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : -50,
      transition: { delay: 0.4, duration: 0.8 }
    })
  };
  