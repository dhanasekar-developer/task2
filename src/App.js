import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Income from './pages/Income';
import Promote from './pages/Promote';
import Help from './pages/Help';

const App = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default App;