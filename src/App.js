import React from 'react';
import './assets/css/style.css'
import Header from './components/header';
import About from './components/about'
import Footer from './components/footer';
import Resume from './components/resume';
import Work from './components/work';
import Home from './homePage'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
  <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutME" element={<About />}/>
        <Route path="/MyWork" element={<Work />}/>
        <Route path="/MyResume" element={<Resume />}/>
      </Routes>
      <Footer/>
</Router>
  )
}

export default App;