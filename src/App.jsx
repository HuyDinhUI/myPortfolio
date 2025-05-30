import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import {Home} from "./pages/home/index"
import {Project} from "./pages/projects/index"
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>} />
            <Route path="/projects" element={<DefaultLayout><Project/></DefaultLayout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
