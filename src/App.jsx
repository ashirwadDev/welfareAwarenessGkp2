// App.jsx
import React, { useState } from "react";
import LogoSplash from "./components/LogoSplash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/OurTeam";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import Faqs from './components/Faqs'
import AdBanner from './components/AdBanner'
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <LogoSplash onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <AdBanner />
          <Team />
          <Faqs />
          <AdBanner />
          <Membership />
          <Footer />
        </>
      )}
    </>
  );
}
