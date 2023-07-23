import mainLogo from'../images/final-logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function offcanvas() {
  return (
<>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#home"><img src={mainLogo} alt="Logo" style={{width:"200px", height:"80px"}} /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={mainLogo} alt="Logo" style={{width:"200px", height:"80px"}} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" flex-grow-1 pe-3 mt-lg-3 ">
                  <Nav.Link href="./">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/Jobs">Jobs</Nav.Link>
                  <Nav.Link href="/Testimonial">Testimonial</Nav.Link>
                  <Container>
                  <Form className="d-flex col-lg-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                  </Form>
                  </Container>
                </Nav>
                <div className="container me-lg-0 col-lg-3">                  
                <div id="login-form" className="d-flex ">
                    <h5>Login:</h5>
                    <input className="form-control me-2 ms-2" type="text" name="username" id="username" placeholder="Username" aria-label="Username"/>
                    <input className="form-control me-2" type="password" name="password" id="password" placeholder="Password" aria-label="Password"/>
                    <button onClick="loginUser()" className="btn btn-outline-primary" type="submit">Signup</button>
                </div>

                <div id="logged-in" className="d-none">
                    <h3>User: &nbsp;<span id="logged-in-user"className="me-5"></span></h3>
                    <button onClick="logout()" className="btn btn-outline-primary ms-5" type="submit">Logout</button>
                </div>

                  <span className="d-flex justify-content-center mt-2 text-primary" id="c-Account" onClick="navigateToCreateAccount()">Create Account?</span>
              </div>  
      
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
           

  )
}

export default offcanvas
