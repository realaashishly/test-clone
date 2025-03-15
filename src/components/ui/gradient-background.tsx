"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientBackgroundProps {
  children?: ReactNode;
  className?: string;
  variant?: "orange-pink" | "blue-purple" | "yellow-peach" | "green-blue";
  intensity?: "light" | "medium" | "strong";
  animated?: boolean;
  blur?: "none" | "sm" | "md" | "lg" | "xl";
  pattern?: "none" | "dots" | "grid" | "waves";
}

export default function GradientBackground({
  children,
  className = "",
  variant = "orange-pink",
  intensity = "medium",
  animated = true,
  blur = "lg",
  pattern = "none",
}: GradientBackgroundProps) {
  // Define gradient variants
  const gradientVariants = {
    "orange-pink": "from-primary via-mymind-pink to-mymind-peach",
    "blue-purple": "from-mymind-blue via-mymind-purple to-primary",
    "yellow-peach": "from-mymind-yellow via-mymind-peach to-mymind-pink/50",
    "green-blue": "from-mymind-teal via-mymind-blue to-mymind-purple",
  };

  // Define intensity classes
  const intensityClasses = {
    light: "opacity-10",
    medium: "opacity-20",
    strong: "opacity-30",
  };

  // Define blur classes
  const blurClasses = {
    none: "",
    sm: "blur-sm",
    md: "blur-md",
    lg: "blur-lg",
    xl: "blur-xl",
  };

  // Define pattern styles
  const patternStyles = {
    none: {},
    dots: {
      backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    },
    grid: {
      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    },
    waves: {
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E\")",
    },
  };

  // Animation variants
  const backgroundVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: animated ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop" as const,
      }
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradientVariants[variant]} ${intensityClasses[intensity]} ${blurClasses[blur]}`}
        initial="initial"
        animate="animate"
        variants={backgroundVariants}
        style={{
          backgroundSize: "200% 200%",
          ...patternStyles[pattern],
        }}
      />
      {children}
    </div>
  );
}
