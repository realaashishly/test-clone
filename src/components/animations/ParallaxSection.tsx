"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useGetTransform = (
  direction: "up" | "down" | "left" | "right",
  speed: number
) => {
  const { scrollYProgress } = useScroll();
  const distance = 100 * speed;

  // Define all hooks unconditionally
  const transformUp = useTransform(
    scrollYProgress,
    [0, 1],
    [`translateY(${distance}px)`, `translateY(0px)`]
  );
  const transformDown = useTransform(
    scrollYProgress,
    [0, 1],
    [`translateY(-${distance}px)`, `translateY(0px)`]
  );
  const transformLeft = useTransform(
    scrollYProgress,
    [0, 1],
    [`translateX(${distance}px)`, `translateX(0px)`]
  );
  const transformRight = useTransform(
    scrollYProgress,
    [0, 1],
    [`translateX(-${distance}px)`, `translateX(0px)`]
  );

  // Return the appropriate transform based on direction
  switch (direction) {
    case "up":
      return transformUp;
    case "down":
      return transformDown;
    case "left":
      return transformLeft;
    case "right":
      return transformRight;
    default:
      return transformUp;
  }
};

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  speed?: number;
  opacity?: boolean;
  scale?: boolean;
  overflow?: boolean;
  threshold?: number;
}

export default function ParallaxSection({
  children,
  className = "",
  direction = "up",
  speed = 0.3,
  opacity = true,
  scale = false,
  overflow = false,
  threshold = 0.2,
}: ParallaxSectionProps) {
  const sectionRef = useRef(null);

  // Use scrollYProgress from here (to avoid duplication)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Get transform value from the custom hook
  const transform = useGetTransform(direction, speed);

  // Use inView for conditional rendering or effects
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false,
  });

  // ✅ Define hooks unconditionally
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.3, 1]
  );
  const scaleTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.95, 1]
  );

  // ✅ Use a ternary operator or variable for conditional logic
  const opacityValue = opacity ? opacityTransform : 1;
  const scaleValue = scale ? scaleTransform : 1;

  return (
    <div
      ref={sectionRef}
      className={`${className} ${
        overflow ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <motion.div
        ref={ref}
        style={{
          y: transform, // ✅ Use the transform value directly
          opacity: opacityValue,
          scale: scaleValue,
        }}
        className="parallax-inner h-full w-full text-left"
      >
        {children}
      </motion.div>
    </div>
  );
}
