import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage1 from "./components/LandingPage1/LandingPage1";
import LandingPage2 from "./components/LandingPage2/LandingPage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage1 />} />
        <Route path="/university1" element={<LandingPage1 />} />
        <Route path="/university2" element={<LandingPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
