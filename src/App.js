import React from 'react';
import './App.css';
import Landpage from './pages/Landpage/Landpage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <div className="App h-100">
      <Router>
        <Routes>
          <Route path="/" element={<Landpage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
