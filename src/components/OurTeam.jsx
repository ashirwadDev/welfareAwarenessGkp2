// OurTeam.jsx
import React from "react";
import {motion} from 'framer-motion'
import { FaInstagram } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

export default function OurTeam() {
  const coreTeam = [
    {
      name: "Arvind Yadav",
      role: "President",
      img: "/presiident.jpg",
      insta: "https://www.instagram.com/arvind_yaduvanshi04/",
    },
    {
      name: "Shubham Mishra",
      role: "Vice President",
      img: "/vicepresident3.jpg",
      insta: "https://www.instagram.com/shubhamishrayt/",
    },
  ];

  return (
    <section
      id="team"
      name="team"
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16 overflow-hidden"
    >
      {/* Heading */}
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
            Executive Team
          </h2>
          <div className="h-1 w-24 bg-teal-400 mx-auto mt-2 rounded"></div>
        </div>
      </FadeInSection>

      {/* Core Members */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 w-full overflow-x-hidden">
        {coreTeam.map((member, index) => (
          <FadeInSection key={index} delay={0.2 + index * 0.2}>
            <div className="flex flex-col items-center text-center w-full max-w-xs md:max-w-sm transform hover:scale-105 transition duration-300">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-teal-400"
              />
              <h3 className="mt-4 text-lg md:text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
                {member.role}
              </p>

              {/* Instagram Link */}
              <a
                href={member.insta}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-pink-500 hover:text-pink-600 transition text-xl"
              >
                <FaInstagram />
              </a>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
