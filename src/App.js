import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launches from "./pages/Launches";

import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/launches" element={<Launches />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
