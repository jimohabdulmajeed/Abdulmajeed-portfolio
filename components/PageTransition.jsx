"use client";

import {AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


export const PageTransition = ({children}) => {
    const pathname = usePathname();
  return(
     <AnimatePresence>
       <div key={pathname}>
        <motion.div
         initial={{opacity: 1}}
          animate={{
            opacity: 0,
            transition: {dely: 1, duration: 0.4, ease: "easeOut"},
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
          {children}
        </div>
      </AnimatePresence>

  );
  
};


export default PageTransition;
