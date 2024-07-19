import React from "react";
import "./App.css";

import movies from "./movies";
import { Hero } from "./components/Hero";
import { UiNavbar } from "./components/ui/Navbar";

console.log(movies[1]);
function App() {
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
