import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from '../../pages/Signup';
import SignupComplete from '../../pages/SingupComplete';
import "./Header.css";

function Header(props) {
    const onClickLogout = () => {
      sessionStorage.removeItem("user");
      document.location.href = "/";
    }

    return (
      <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/"><img src="img/logo.png" width="170" height="45" alt="logo" /></Navbar.Brand>
          <Nav className="justify-content-end">
            {props.isLogin ?
              <button className="logout-btn" onClick={onClickLogout}>로그아웃</button> :
              <>
              <Nav.Link href="/login">로그인</Nav.Link>
              <Nav.Link href="/signup">회원가입</Nav.Link>
              </>
            }
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/complete" element={<SignupComplete />} />
      </Routes>
      </>
    );
}

export default Header;
