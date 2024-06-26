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

export const cardAnimationVariants = {
  hover: { opacity: 0, y: '100%' },
};

export const displayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const upVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const upScaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const moonVariants = {
  checked: {
    scale: 1,
  },
  unchecked: {
    scale: 0,
  },
};

export const sunVariants = {
  checked: {
    scale: 0,
  },
  unchecked: {
    scale: 1,
  },
};

export const blurAnimationVariations = {
  hover: { backdropFilter: 'blur(10px)' },
};
