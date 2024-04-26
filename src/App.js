import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

const App = () => {
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
