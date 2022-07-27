import './App.css';
import Nav from '../src/components/Navigationbar';
// import Main from './Pages/Home';
import LearnMore from './Pages/LearnMore';
import Products from './Pages/Products';
import Footer from '../src/components/Footer';
import Home from './Pages/Home';
import Reg from './Pages/Registration';
import login from './Pages/Login';


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



function App() {
  return (
  <>
    
    
    <Router>
      <Nav icon='AVInstrumentsandControls' l1='Home' l2='Products' l3='Learn More' quantity='(2)'/> 
      {/* <Home title='AVIC'/> */}
      {/* <Products/> */}
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Products' element={<Products />}/>
        <Route path='/LearnMore' element={<LearnMore />}/>
        <Route path ='/RegPage' element={<Reg />}/>
        <Route path ='/LoginPage' element={<Login />}/>
      </Routes>
      
      <Footer l1='Contact Us' />

    </Router>
    
    
    
    
    
    
    
    {/* <Main title='Quality & Trust'/> */}
    {/* <Products /> */}
{/* <Row>
      <Col><Products /></Col>
      <Col><Products /></Col>
      <Col><Products /></Col>
    </Row> */}
  </>
  );
}

export default App;
