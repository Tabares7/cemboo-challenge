import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/ui/Navbar";
import { Hero } from "./components/Hero";
import { Recommended } from "./components/Recommended";
import { SciFi } from "./components/SciFi";
import { Drama } from "./components/Drama";
import { Footer } from "./components/ui/Footer";

// Application main structure with primary components displayed in sequence.
const App: React.FC = () => {
  const [posts, setPosts] = useState([]);

  // Simulate fetching data from an API on component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pastecode.io/s/4owen59r");
      const data = await response.json();
      setPosts(data.slice(0, 10)); // Limit to the first 10 posts for simplicity
    };

    fetchData().catch(console.error); // Catch and log any errors
  }, []);

  return (
    <>
      <Navbar />
      <main className="px-0 md:px-20">
        <Hero />
        {/* Pass fetched data to components as needed */}
        <Recommended />
        <SciFi />
        <Drama />
      </main>
      <Footer />
    </>
  );
};

export default App;
