"use client";

import { MotionConfig } from "framer-motion";

// Honours the OS "reduce motion" setting for every Framer Motion animation.
const Providers = ({ children }) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default Providers;
