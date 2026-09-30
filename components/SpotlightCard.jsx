"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

// Card with a soft accent glow that follows the pointer.
const SpotlightCard = ({ as: Comp = "div", className, children, ...props }) => {
  const ref = useRef(null);

  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Comp
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn("card group/spot relative overflow-hidden", className)}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgb(var(--glow) / 0.12), transparent 60%)",
        }}
        aria-hidden="true"
      />
      {children}
    </Comp>
  );
};

export default SpotlightCard;
