import React, { useEffect } from "react";
import "./App.css";

import movies from "./movies";
import { Hero } from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import { Recomended } from "./components/Recomended";
import { Drama } from "./components/Drama";
import { SciFi } from "./components/SciFi";
import { Footer } from "./components/ui/Footer";

console.log(movies[1]);

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="px-0 md:px-20">
        <Hero />
        <Recomended />
        <SciFi />
        <Drama />
      </main>
      <Footer />
    </>
  );
};

export default App;
