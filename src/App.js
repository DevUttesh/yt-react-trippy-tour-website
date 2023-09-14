import React from "react";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Service from "./routes/Service/Service";
import Contact from "./routes/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}
