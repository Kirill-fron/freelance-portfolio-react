import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Pages/Contacts/Contacts";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Skills from "./components/Pages/Skills";
import Project from "./components/Pages/Project";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";

import "./Css/main.css";
import "./Css/reset.css";


function App() {
  return (
    <div className="App">
      <Router>

        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
