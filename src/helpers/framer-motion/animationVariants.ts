export const sectionVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
};

// INTRODUCTION
export const upVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const displayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
