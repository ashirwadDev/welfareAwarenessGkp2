// Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section name="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900 px-6">
      {/* Heading / Quote */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ color: "#4ade80" }}>
        “Together for a Better Tomorrow”
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-xl max-w-2xl text-gray-700 dark:text-gray-300">
        Welfare awareness is the first step towards building a compassionate and 
        empowered society. Let’s join hands to spread knowledge, support the 
        underprivileged, and create equal opportunities for everyone.
      </p>
    </section>
  );
}
