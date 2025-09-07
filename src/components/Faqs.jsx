// FAQs.jsx
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  { q: "What is the purpose of Welfare Awareness?", a: "Our goal is to spread awareness about social welfare schemes, health, and education opportunities available to people so they can benefit and improve their lives." },
  { q: "Who can join your welfare community?", a: "Anyone who wants to contribute towards awareness, support social causes, or simply learn about available welfare opportunities is welcome to join." },
  { q: "Do you charge any membership fees?", a: "No, joining our welfare awareness community is completely free. We believe knowledge and awareness should be accessible to everyone." },
  { q: "How can I contribute to this initiative?", a: "You can volunteer, share resources, spread awareness on social media, or support campaigns that aim to help the underprivileged." },
  { q: "Where do you get the information for schemes?", a: "We gather information from official government websites, verified NGOs, and reliable news sources to ensure accuracy." },
  { q: "Do you also organize offline events?", a: "Yes, we organize awareness camps, seminars, and offline meetups from time to time to reach people who may not be active online." },
  { q: "How can I contact your team?", a: "You can reach us through the Contact page on our website or via our official social media channels for queries and collaborations." },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" }); // false → animate every time section enters viewport

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={sectionRef}
      id="faqs"
      name="faqs"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400">FAQs</h2>
        <div className="h-1 w-24 bg-teal-400 mx-auto mt-2 rounded"></div>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {faq.q}
              <span className="ml-4 text-teal-400">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Smooth animated answer */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
