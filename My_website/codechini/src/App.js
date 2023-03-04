import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import GetInTouch from './pages/GetInTouch';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/Main' element={<Main />} />
          <Route path='/About' element={<About />} />
          <Route path='/GetInTouch' element={<GetInTouch />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
