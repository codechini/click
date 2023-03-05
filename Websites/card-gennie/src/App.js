import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import ChildProcessSpawn from './components/ChildProcessSpawn';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/ChildProcessSpawn" element={<ChildProcessSpawn />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
