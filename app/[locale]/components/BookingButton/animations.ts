import type { Variants } from "framer-motion";

export const bookingButtonAnimation: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5 },
  },
  quit: {
    opacity: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.2 },
  },
  tap: { scale: 1 },
};
