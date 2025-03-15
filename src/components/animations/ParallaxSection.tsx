"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false,
  });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calculate the appropriate transform based on the direction
  const getTransform = () => {
    const distance = 100 * speed; // pixels to move

    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], [`translateY(${distance}px)`, `translateY(0px)`]);
      case "down":
        return useTransform(scrollYProgress, [0, 1], [`translateY(-${distance}px)`, `translateY(0px)`]);
      case "left":
        return useTransform(scrollYProgress, [0, 1], [`translateX(${distance}px)`, `translateX(0px)`]);
      case "right":
        return useTransform(scrollYProgress, [0, 1], [`translateX(-${distance}px)`, `translateX(0px)`]);
      default:
        return useTransform(scrollYProgress, [0, 1], [`translateY(${distance}px)`, `translateY(0px)`]);
    }
  };

  const y = getTransform();
  const opacityValue = opacity ? useTransform(scrollYProgress, [0, 0.5], [0.3, 1]) : 1;
  const scaleValue = scale ? useTransform(scrollYProgress, [0, 0.5], [0.95, 1]) : 1;

  return (
    <div
      ref={sectionRef}
      className={`${className} ${overflow ? "overflow-visible" : "overflow-hidden"}`}
    >
      <motion.div
        ref={ref}
        style={{
          y,
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
