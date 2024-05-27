import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import Works from "./pages/Works";
import BlogsTech from "./pages/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for other pages if needed */}
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Blogs" element={<BlogsTech />} />
      </Routes>
    </Router>
  );
}

export default App;
