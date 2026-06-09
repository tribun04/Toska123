import React from "react";
// Notice: We do NOT import 'Router' or 'BrowserRouter' here anymore
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import Projects from "./pages/Projectpages";
import ImaginerPage from "./pages/ImaginerPage.jsx";
function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* We use Routes and Route directly because the Router is already in main.jsx */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
            <Route path="/imaginer" element={<ImaginerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;