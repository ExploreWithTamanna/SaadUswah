import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PackagePage from "./pages/PackagePage";
import PackageDetailsPage from "./pages/PackageDetailsPage";
import ScrollToTop from "./components/ScrollToTop"; // ✅ import it

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* ✅ Add this here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/package" element={<PackagePage />} />
        <Route path="/package/:id" element={<PackageDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
