import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // make sure the path matches your project structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* You can add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
