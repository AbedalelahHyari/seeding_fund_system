import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { logoutRed } from "../../src/reducers/login/index";
import { useDispatch, useSelector } from "react-redux";
/************************************************************** */
const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="/funding">Fund Raising</Nav.Link>
            <Button
              onClick={() => {
                dispatch(logoutRed());
                localStorage.clear();
                navigate("/");
              }}
              variant="outline-danger"
            >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
