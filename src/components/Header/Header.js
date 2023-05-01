import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Routes, Route, NavLink } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import { NavbarBrand } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <NavbarBrand href="/">
            <img src="img/logo.png" width="170" height="45" alt="logo" />
          </NavbarBrand>
          <Nav className="justify-content-end">
            <Nav.Link href="/login">로그인</Nav.Link>
            <Nav.Link href="/signup">회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default Header;
