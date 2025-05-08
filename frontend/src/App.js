import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Post from './components/Post';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/create" element={<CreatePost />} />
                  <Route path="/post/:id" element={<Post />} />
                  <Route path="/edit/:id" element={<EditPost />} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;