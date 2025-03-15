"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glassEffect?: boolean;
  raised?: boolean;
  highlightBorder?: boolean;
  borderColor?: string;
  onClick?: () => void;
}

export function PremiumCard({
  children,
  className = "",
  hoverEffect = true,
  glassEffect = false,
  raised = false,
  highlightBorder = false,
  borderColor = "border-primary/10",
  onClick,
}: PremiumCardProps) {
  const baseClass = `relative overflow-hidden rounded-xl backdrop-blur-sm border transition-all duration-300 ${className}`;

  const glassClass = glassEffect
    ? "bg-white/30 backdrop-blur-md"
    : "bg-white";

  const raisedClass = raised
    ? "shadow-xl"
    : "shadow-sm";

  const hoverClass = hoverEffect
    ? "hover:shadow-lg hover:-translate-y-1 duration-300"
    : "";

  const borderClass = highlightBorder
    ? `border ${borderColor}`
    : "border-gray-100";

  return (
    <motion.div
      className={`${baseClass} ${raisedClass} ${borderClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
      onClick={onClick}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-br from-white/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom gradient */}
      {highlightBorder && (
        <div className="absolute inset-x-0 -bottom-px h-[2px] bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />
      )}
    </motion.div>
  );
}
