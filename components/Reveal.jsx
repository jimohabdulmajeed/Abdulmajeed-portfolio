"use client";

import { motion } from "framer-motion";

// Fades and lifts its children into view the first time they are scrolled to.
const Reveal = ({ children, delay = 0, y = 24, className, as = "div" }) => {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
