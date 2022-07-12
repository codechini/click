import './App.css';
import Nav from '../src/components/Navigationbar';
// import Main from './Pages/Home';
import LearnMore from './Pages/LearnMore';
import Products from './Pages/Products';
import Footer from '../src/components/Footer';
import Home from './Pages/Home';

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



function App() {
  return (
  <>
    
    
    <Router>
     <Nav icon='AVInstrumentsandControls' l1='Home' l2='Products' l3='Learn More' quantity='(2)'/> 
     <Home title='Products'/>
     
      <Routes>
        <Route path='/Products' element={<Products />}/>
        
      </Routes>
      <Routes>
        <Route path='/LearnMore' element={<LearnMore />}/>
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
