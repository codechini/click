import './App.css';
import Nav from '../src/components/Navigationbar';
// import Main from './Pages/Home';
import LearnMore from './Pages/LearnMore';
import Products from './components/Products';
import Footer from '../src/components/Footer';
import Home from './Pages/Home';
import Reg from './Pages/Registration';
import login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import TestingPage from './Pages/TestingPage';

import { db } from '../src/firebase-config';

import {
  Card,
  Col,
  Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from 'react-router-dom';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <>
    
    
    <Router>
      <Nav icon='AVInstrumentsandControls' l1='Home' l2='Products' l3='Learn More' quantity='(2)'/> 
      {/* <Home title='AVIC'/> */}
      {/* <Products/> */}
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/ProductPage' element={<ProductPage />}/>
        <Route path='/LearnMore' element={<LearnMore />}/>
        <Route path ='/RegPage' element={<Reg />}/>
        <Route path ='/LoginPage' element={<Login />}/>
        <Route path ='/ProductDetails' element={<ProductDetails />}/>
        <Route path='/TestingPage' element={<TestingPage />}/>
      </Routes>
      
      <Footer l1='Contact Us' />

    </Router>
    </>
  );
}

export default App;
