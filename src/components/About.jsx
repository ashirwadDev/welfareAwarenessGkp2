// About.jsx
import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const lineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jab section viewport me aaye -> expand
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // Jab section viewport se bahar ho -> shrink
          setVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) observer.unobserve(lineRef.current);
    };
  }, []);

  return (
    <section id="about" name="about" className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 py-16">
      {/* Divider Horizontal Line */}
      <div className="flex justify-center items-center mb-12">
        <div
          ref={lineRef}
          className={`h-1 bg-teal-400 transition-all duration-1000 ease-in-out ${
            visible ? "w-3/4" : "w-0"
          }`}
        ></div>
      </div>

      {/* About Us Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-400">
          About Us
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          We are a community-driven initiative dedicated to spreading welfare
          awareness and empowering people with knowledge. Our mission is to
          create equal opportunities for every individual, regardless of their
          background, by promoting education, health awareness, and social
          support systems. We believe that true progress is only possible when
          society stands together, working hand-in-hand to uplift the
          underprivileged and bridge the gaps of inequality. Through campaigns,
          workshops, and outreach programs, we aim to build a more inclusive,
          compassionate, and supportive environment where everyone has the
          chance to thrive. Together, we envision a future where welfare is not
          just a concept, but a way of life embraced by all.
        </p>
      </div>
    </section>
  );
}
