import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import "./App.css";
import ProgressBar from "./components/progress-bar/ProgressBar";

function App() {
  return (
    <>
      <ProgressBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
