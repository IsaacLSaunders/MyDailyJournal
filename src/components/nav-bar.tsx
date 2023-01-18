import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function NavHome() {
  return (
    <Navbar bg="dark" variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>
          My Daily Journal
        </Navbar.Brand>
        <Nav.Link href='#about'>About</Nav.Link>
        <Navbar.Collapse className='justify-content-end'>
        <Button as='button' href='#authModal'>Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHome;