import './App.css';
import Nav from '../src/components/Navigationbar';
import LearnMore from './Pages/LearnMore';
import Footer from '../src/components/Footer';
import Home from './Pages/Home';
import Reg from './Pages/Registration';
import ProductPage from './Pages/ProductPage';
import TestingPage from './Pages/TestingPage';
import Payment from './Pages/Payment';

// import { db } from '../src/firebase-config';

// import {
//   Card,
//   Col,
//   Row
// } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';
import Mail from './Pages/Mail';
import Admin from './Pages/Admin';
import ULogin from './Pages/ULogin';
import ALogin from './Pages/ALogin';
import Cart from './Pages/Cart';
// import { AuthContextProvider } from './firebase-config';
import Accounts from './Pages/Accounts';
import Protected from './Pages/Protected';
import Ordered from './Pages/Ordered';
import PDF from './Pages/PDF';

function App() {
  return (
    <>
      <Router>
        <Nav icon='AVInstrumentsandControls' l1='Home' l2='Products' l3='Learn More' quantity='(2)' />
        {/* <Home title='AVIC'/> */}
        {/* <Products/> */}
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/ProductPage' element={<ProductPage />} />
          <Route path='/LearnMore' element={<LearnMore />} />
          <Route path='/RegPage' element={<Reg />} />
          <Route path='/LoginPage' element={<Login />} />
          <Route path='/ProductDetails' element={<ProductDetails />} />
          <Route path='Payment' element={<Payment />} />
          <Route path='/TestingPage' element={<TestingPage />} />
          <Route path='/Mail' element={<Mail />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='ULogin' element={<ULogin />} />
          <Route path='/ALogin' element={<ALogin />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Accounts' element={<Accounts />} />
          <Route path='/Ordered' element={<Ordered />} />
          <Route path='/Ordered' element={<PDF />} />
        </Routes>

        <Footer l1='Contact Us' />
      </Router>
    </>
  );
}

export default App;
