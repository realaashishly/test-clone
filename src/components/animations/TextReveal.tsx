"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TextRevealProps {
  text: string;
  className?: string;
  type?: "letter" | "word";
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  once?: boolean;
  font?: string;
  color?: string;
}

export default function TextReveal({
  text,
  className = "",
  type = "word",
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.03,
  once = true,
  font = "font-louize",
  color = "text-mymind-dark",
}: TextRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  // Split text based on type
  const items = type === "word" ? text.split(" ") : text.split("");

  // The container variants for the animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  // The item variants for the animation
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      aria-label={text}
      className={`${className} ${font} ${color} overflow-hidden`}
    >
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className={`inline-block  leading-tight ${type === 'word' ? 'mr-4' : ''}`}
          >
            {item}
            {type === "letter" && item === " " ? "\u00A0" : ""}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
