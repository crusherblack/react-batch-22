import { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

const NavbarComponent = () => {
  const [state] = useContext(UserContext);
  const [cartState] = useContext(CartContext);

  const cartItemCount = cartState.carts.reduce(
    (acc, curr) => acc + curr.qty,
    0
  );

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!state.isLogin ? (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          ) : (
            <>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/form">
                Form
              </Nav.Link>
              <NavDropdown title="Avatar" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/cart">
            Cart ({cartItemCount})
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
