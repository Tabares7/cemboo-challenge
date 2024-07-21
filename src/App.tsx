import React from "react";
import "./App.css";

import movies from "./movies";
import Navbar from "./components/ui/Navbar";
import { Hero } from "./components/Hero";
import { Recommended } from "./components/Recommended";
import { SciFi } from "./components/SciFi";
import { Drama } from "./components/Drama";
import { Footer } from "./components/ui/Footer";

// Application main structure with primary components displayed in sequence.
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="px-0 md:px-20">
        <Hero />
        <Recommended />
        <SciFi />
        <Drama />
      </main>
      <Footer />
    </>
  );
};

export default App;
