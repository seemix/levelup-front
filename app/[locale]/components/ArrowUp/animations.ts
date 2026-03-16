import type { Variants } from "framer-motion";

export const arrowUpAnimation: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
  quit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
  tap: { scale: 1 },
};
