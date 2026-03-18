const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewport = {
  once: true,
  amount: 0.24,
};

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      delay,
      ease: easeCurve,
    },
  },
});

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
