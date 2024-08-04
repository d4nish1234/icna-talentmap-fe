import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="users/:id" element={<Users />} /> */}
    </Routes>
  </BrowserRouter>
)

export default App;
