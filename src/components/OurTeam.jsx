// OurTeam.jsx
import React from "react";

export default function OurTeam() {
  const coreTeam = [
    {
      name: "Arvind Yadav",
      role: "President",
      img: "/president.jpg",
    },
    {
      name: "Shubham Mishra",
      role: "Vice President",
      img: "/vicepresident3.jpg",
    },
  ];

  return (
    <section
      id="team"
      name="team"
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
          Executive Team
        </h2>
        <div className="h-1 w-24 bg-teal-400 mx-auto mt-2 rounded"></div>
      </div>

      {/* Core Members */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 w-full overflow-x-hidden">
        {coreTeam.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full max-w-xs md:max-w-sm"
          >
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
          </div>
        ))}
      </div>
    </section>
  );
}
