// PopunderAd.jsx
import { useEffect } from "react";

export default function PopunderAd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl27607733.revenuecpmgate.com/75/05/b6/7505b62e5e836bb319521c9135298f36.js";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Iska UI pe kuch dikhana zaroori nahi hai
}
