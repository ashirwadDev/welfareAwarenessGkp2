import React, { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    let key = "9297fda68325864bced132530e3a5cb5"; // apna Adsterra key yahan daalna
    let format = "iframe";
    let width = 300;
    let height = 250;

    // Responsive logic
    if (window.innerWidth < 640) {
      // Mobile
      width = 300;
      height = 250;
    } else if (window.innerWidth < 1024) {
      // Tablet
      width = 468;
      height = 60;
    } else {
      // Desktop
      width = 728;
      height = 90;
    }

    // Adsterra options set
    window.atOptions = {
      key,
      format,
      height,
      width,
      params: {}
    };

    // Script inject
    const script = document.createElement("script");
    script.src = `//www.highperformanceformat.com/${key}/invoke.js`;
    script.async = true;

    const adContainer = document.getElementById("ad-container");
    if (adContainer) {
      adContainer.innerHTML = "";
      adContainer.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center my-6">
      <div id="ad-container"></div>
    </div>
  );
}
