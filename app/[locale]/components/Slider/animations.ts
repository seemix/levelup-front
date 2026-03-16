import type { Variants } from "framer-motion";

export const slideAppearAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};
