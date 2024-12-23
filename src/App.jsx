import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhilosophyPage from "./pages/PhilosophyPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
