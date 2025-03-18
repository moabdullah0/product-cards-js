export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideIn = (direction) => ({
  initial: { x: direction * 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
});

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};
