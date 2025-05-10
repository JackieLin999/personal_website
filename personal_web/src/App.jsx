import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home"

function App() {
  return (
    <div className="App">
      <div className="Page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
