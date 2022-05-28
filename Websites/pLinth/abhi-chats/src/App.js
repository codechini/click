import './App.css';
// import './components/Navb'
import 
{Navbar,
  Nav,
  Container,
  Button,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
        <Navbar.Brand href="#home">Crammer's</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Support us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <main style={{backgroundColor:'rgb(215,216,218)'}}>
        <Container fluid> 
            <Col md='auto' style={{textAlign:'center', border: '1px solid'}}>
              Contacts<br></br>
              <Button>Contact1 </Button>
            </Col>
        </Container>
      </main>
    </div>
  );
}

export default App;
