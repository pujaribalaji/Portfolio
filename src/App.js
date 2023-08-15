import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Nav />} />
    </Routes>
   </Router>
  );
}

export default App;
