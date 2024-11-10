import React from "react";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";

import Projects from "./pages/Projects.jsx";
import Roadmap from "./pages/roadmaps.jsx";



import Header from "./Header"; // Assuming 'Header.jsx' is directly under 'src'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/projects" element={<Projects />} /> {/* Add Projects route */}
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/register" element={<Register />} />
           

           
          </Routes>
        
      </div>
    </>
  );
}

export default App;
