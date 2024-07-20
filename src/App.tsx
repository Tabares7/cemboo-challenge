import React from "react";
import "./App.css";

import movies from "./movies";
import { Hero } from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import { Recomended } from "./components/Recomended";
import { Drama } from "./components/Drama";
import { SciFi } from "./components/SciFi";
import { Footer } from "./components/ui/Footer";

console.log(movies[1]);
function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <Recomended />
        <SciFi />
        <Drama />
      </main>
      <Footer />
    </>
  );
}

export default App;
