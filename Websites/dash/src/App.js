import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Github from './pages/Github';
import NpmInst from './pages/NpmInst';
import NoPage404 from './pages/NoPage404';
import Protected from './components/Protected';
import Login from './pages/Login';
import CardAcceptor from './components/CardAcceptor';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/Login" element={<Protected Component={Login} />} />
          <Route path="/" element={<Protected Component={Main} />} />
          <Route path="/About" element={<About />} />
          <Route path="/CardAcceptor" element={<CardAcceptor />} />
          <Route path="/Github" element={<Protected Component={Github} />} />
          <Route path="/NpmInst" element={<Protected Component={NpmInst} />} />
          <Route path="*" element={<NoPage404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
