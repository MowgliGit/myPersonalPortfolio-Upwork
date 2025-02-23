import {
  BrowserRouter as Router,
  Route,
  Routes,
  UNSAFE_getPatchRoutesOnNavigationFunction,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <div className="mainPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
