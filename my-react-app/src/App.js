import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.js'; // Import your Login component
import Menu from './components/menu.js'; 



function App() {
  return (
    <Router>
      {/* Your application routes */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login route */}
        <Route path="/menu" element={<Menu />} /> {/* Add Menu route */}
        {/* Other routes for your application */}
      </Routes>
    </Router>
  );
}

export default App;

