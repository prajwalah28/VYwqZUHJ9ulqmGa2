import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import { About } from "./components/Pages/About";
import { Resume } from "./components/Pages/Resume";
import { BMI } from "./components/Pages/BMI";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/bmi" element={<BMI/>} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
