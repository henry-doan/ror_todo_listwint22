import { Navbar, Nav, Container } from 'react-bootstrap';
import { MainNavLink } from '../styles/mainStyles';

const MainNavbar = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <MainNavLink to='/' color='black'>
            TodoList
          </MainNavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link>
              <MainNavLink to='/'>
                Home
              </MainNavLink>
            </Nav.Link>
            <Nav.Link>
              <MainNavLink to='/about'>
                About
              </MainNavLink>
            </Nav.Link>
            <Nav.Link>
              <MainNavLink to='/lists'>
                Lists
              </MainNavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default MainNavbar;