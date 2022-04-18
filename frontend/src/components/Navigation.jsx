import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { logoutRed } from "../../src/reducers/login/index";
import jwt_decode from "jwt-decode";
import logo from "../images/logo.png";
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
  const decodedToken = localStorage.getItem("token")
    ? jwt_decode(localStorage.getItem("token"))
    : "";
  /************************************** */
  return (
    <>
      {decodedToken.role.role === "Admin" ? (
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/admin">
              <img
                src={logo}
                width="150"
                height="75"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              {state.isLoggedIn ? (
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
              ) : (
                <></>
              )}
            </Nav>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="150"
                height="75"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/funding">Fund Raising</Nav.Link>
              {state.isLoggedIn ? (
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
              ) : (
                <></>
              )}
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
