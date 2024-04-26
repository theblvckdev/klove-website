import React from "react";
import Hero from "./components/hero";
import Navbar from "../../components/global_ui_components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
