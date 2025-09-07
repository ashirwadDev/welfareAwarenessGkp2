// OurTeam.jsx
import React from "react";

export default function OurTeam() {
  const coreTeam = [
    {
      name: "Arvind Yadav",
      role: "Founder & President",
      img: "/president.jpg", // replace with real image
    },
    {
      name: "Shubham Mishra",
      role: "Vice President",
      img: "/image.png",
    },
    {
      name: "Shree",
      role: "Secretary",
      img: "/secretary.jpg",
    },
  ];

  // Example: 50+ members with placeholder images
  const members = Array.from({ length: 50 }, (_, i) => ({
    name: `Member ${i + 1}`,
    img: "https://via.placeholder.com/100", // replace with real photo
  }));

  return (
    <section
      name="team"
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
          Our Team
        </h2>
        <div className="h-1 w-24 bg-teal-400 mx-auto mt-2 rounded"></div>
      </div>

      {/* Core Members */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {coreTeam.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-teal-400"
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {member.role}
            </p>
          </div>
        ))}
      </div>

      {/* All Members Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover shadow-md border border-teal-400"
            />
            <p className="mt-2 text-xs">{member.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
