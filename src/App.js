import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route data-test-id="route" exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
