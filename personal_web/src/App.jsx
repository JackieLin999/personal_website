import React from "react";
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <div className="Page">
        <Routes>
          <Route path="/" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
