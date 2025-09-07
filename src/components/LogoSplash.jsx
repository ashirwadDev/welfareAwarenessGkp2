// LogoSplash.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Particle Component
const Particle = ({ size, x, y, delay }) => (
  <motion.div
    className="absolute rounded-full bg-white/50"
    style={{ width: size, height: size, top: y, left: x }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{ delay, duration: 2, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function LogoSplash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2500); // total splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          background: "linear-gradient(135deg, #111827, #1f2937)", // subtle gradient
        }}
      >
        {/* Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle
            key={i}
            size={`${Math.random() * 6 + 2}px`}
            x={`${Math.random() * 90}%`}
            y={`${Math.random() * 90}%`}
            delay={Math.random() * 2}
          />
        ))}

        {/* Text - slightly above */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-green-400 text-center mb-12 drop-shadow-lg"
          initial={{ scale: 0.5, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: -30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welfare Awareness Gorakhpur
        </motion.h1>

        {/* Logo - slightly below */}
        <motion.img
          src="/client_logo.jpg"
          alt="Logo"
          className="w-32 h-32 rounded-full shadow-2xl"
          initial={{ scale: 0, rotate: 0, opacity: 0, y: 50 }}
          animate={{
            scale: [0, 1.6, 1.5], // bounce
            rotate: 360,
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
