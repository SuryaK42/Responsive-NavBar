import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./page/Home";
import Product from "./page/Product";
import Contact from "./page/Contact";
import About from "./page/About";
import Notfound from "./page/Notfound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route element={<Notfound />} />
      </Routes>
    </Router>
  );
}
export default App;
