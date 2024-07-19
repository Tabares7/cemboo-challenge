import React from "react";
import "./App.css";

import movies from "./movies";
import { Hero } from "./components/Hero";
import { UiNavbar } from "./components/ui/Navbar";
import { Recomended } from "./components/Recomended";

console.log(movies[1]);
function App() {
  return (
    <main className="">
      <Hero />
      <Recomended />
      {/* <Drama /> */}
    </main>
  );
}

export default App;
