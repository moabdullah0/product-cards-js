export const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  export const slideInVariants = {
    initial: (direction) => ({ x: direction * 50, opacity: 0 }),
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };