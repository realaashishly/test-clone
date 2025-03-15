"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  border?: boolean;
  borderColor?: string;
  borderWidth?: number;
  borderGradient?: boolean;
  shadow?: boolean;
  perspective?: number;
  hoverScale?: number;
  glareEffect?: boolean;
  backgroundGradient?: boolean;
  backgroundColors?: string;
  reset?: boolean;
}

export function Card3D({
  children,
  className = "",
  intensity = 15,
  border = false,
  borderColor = "rgba(255, 255, 255, 0.1)",
  borderWidth = 1,
  borderGradient = false,
  shadow = true,
  perspective = 1000,
  hoverScale = 1.02,
  glareEffect = true,
  backgroundGradient = false,
  backgroundColors = "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.05))",
  reset = true,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  // Values for tilt rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth it out
  const springConfig = { damping: 20, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Transform for the card
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-intensity, intensity]);

  // Glare effect variables
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [glareSize, setGlareSize] = useState({ width: 150, height: 150 });
  const [glareOpacity, setGlareOpacity] = useState(0);

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate the XY position within the card (0 to 1)
    const xPos = (e.clientX - rect.left) / width;
    const yPos = (e.clientY - rect.top) / height;

    // Set motion values between -0.5 and 0.5
    x.set(xPos - 0.5);
    y.set(yPos - 0.5);

    // Update glare position
    if (glareEffect) {
      setGlarePosition({ x: xPos * 100, y: yPos * 100 });
      setGlareOpacity(0.15);
      setGlareSize({
        width: Math.max(width, height) * 1.5,
        height: Math.max(width, height) * 1.5,
      });
    }
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    if (reset) {
      x.set(0);
      y.set(0);
    }
    setHover(false);
    setGlareOpacity(0);
  };

  // Get the correct border style
  const getBorderStyle = () => {
    if (!border) return {};

    if (borderGradient) {
      return {
        backgroundClip: "padding-box",
        border: `${borderWidth}px solid transparent`,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          margin: `-${borderWidth}px`,
          borderRadius: "inherit",
          background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))",
        },
      };
    }

    return {
      border: `${borderWidth}px solid ${borderColor}`,
    };
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: perspective,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: hoverScale }}
    >
      {/* Background */}
      {backgroundGradient && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: backgroundColors,
            borderRadius: "inherit",
          }}
        />
      )}

      {/* Border (when not using gradient) */}
      {border && !borderGradient && (
        <div
          className="absolute inset-0 z-0 rounded-inherit"
          style={{
            border: `${borderWidth}px solid ${borderColor}`,
            borderRadius: "inherit",
          }}
        />
      )}

      {/* Glare effect */}
      {glareEffect && (
        <div
          className="absolute pointer-events-none z-10 opacity-0 transition-opacity rounded-full"
          style={{
            opacity: glareOpacity,
            background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
            width: `${glareSize.width}px`,
            height: `${glareSize.height}px`,
            top: `${glarePosition.y}%`,
            left: `${glarePosition.x}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Shadow */}
      {shadow && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            boxShadow: hover
              ? "0 50px 80px -20px rgba(0,0,0,0.15), 0 30px 50px -30px rgba(0,0,0,0.25)"
              : "0 10px 30px -15px rgba(0,0,0,0.15)",
            borderRadius: "inherit",
          }}
        />
      )}

      {/* Content */}
      <div
        className="relative z-10"
        style={{
          transform: "translateZ(10px)",
          borderRadius: "inherit",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
