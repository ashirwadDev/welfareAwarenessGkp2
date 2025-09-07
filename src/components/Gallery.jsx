// Gallery.jsx
import React from "react";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
          Our Gallery
        </h2>
        <div className="h-1 w-24 bg-teal-400 mx-auto mt-2 rounded"></div>
      </div>

      {/* Instagram Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Example Post 1 */}
        <div className="w-full">
          <iframe
            src="https://www.instagram.com/p/Cx1ABCxyz/embed"
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title="Instagram Post 1"
          ></iframe>
        </div>

        {/* Example Post 2 */}
        <div className="w-full">
          <iframe
            src="https://www.instagram.com/p/Cy2DEFxyz/embed"
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title="Instagram Post 2"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
