import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;