// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
import ShowSummary from './components/ShowSummary'; // Import the ShowSummary component
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <button className='navbar'>
            <Link to="/" className='home'>Home</Link>
          </button>
        </div>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/show/:id/summary" element={<ShowSummary />} /> {/* Use the ShowSummary component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
