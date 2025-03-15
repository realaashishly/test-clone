"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlignCenter } from "lucide-react";

interface RichHeadingProps {
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: "plain" | "gradient" | "highlighted" | "underlined" | "outlined" | "accented";
  accent?: "primary" | "secondary" | "blue" | "purple" | "pink";
  align?: "left" | "center" | "right";
  staggerChildren?: number;
  delay?: number;
  once?: boolean;
}

export function RichHeading({
  children,
  className = "",
  tag = "h2",
  type = "plain",
  accent = "primary",
  align = "left",
  staggerChildren = 0.03,
  delay = 0,
  once = true,
}: RichHeadingProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  // Define accent colors
  const accentColors = {
    primary: "from-primary to-mymind-pink",
    secondary: "from-mymind-dark to-mymind-gray",
    blue: "from-mymind-blue to-mymind-purple",
    purple: "from-mymind-purple to-primary",
    pink: "from-mymind-pink to-mymind-peach",
  };

  // Define base classes and specific classes based on type
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const baseClasses = `font-louize relative inline-block ${alignClasses[align]} ${className}`;



  // Special case for highlighted to add a background
  const highlightedBgStyle = type === "highlighted" ? {
    // background: `linear-gradient(to right, ${type === "highlighted" ? "rgba(248, 90, 36, 0.1)" : "transparent"}, ${type === "highlighted" ? "rgba(235, 160, 151, 0.1)" : "transparent"})`,
    borderRadius: "0.25rem",
  } : {};

  // Special case for accented to add decoration


  // Define animations
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

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Split text into words for animation
  const words = children?.toString().split(" ") || [];

  // Dynamically create the right heading element
  const HeadingTag = tag as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={`${baseClasses}`} style={highlightedBgStyle}>

      <motion.span
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="inline-block"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </HeadingTag>
  );
}
