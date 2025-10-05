import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PackagePage from "./pages/PackagePage";
import PackageDetailsPage from "./pages/PackageDetailsPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <Router>
      <ScrollToTop />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/package" element={<PackagePage />} />
        <Route path="/package/:id" element={<PackageDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </Router>
  );
}

export default App;
