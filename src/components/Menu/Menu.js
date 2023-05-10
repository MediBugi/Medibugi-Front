import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import LoginModal from "../Modal/LoginModal";
import { useState } from "react";

const activeStyle = {
  color: "#0fa2f1",
  textDecoration: "none",
};
const deactiveStyle = {
  color: "black",
  textDecoration: "none",
};

function Menu(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const checkLogin = (event) => {
    if (!props.isLogin) {
      event.preventDefault();
      setModalOpen(true);
    }
  };
  const closeModal = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <Navbar className="top-line">
        <Container>
          <Nav className="menu-name">
            <NavLink
              to="/infolist"
              className="find-doc"
              style={({ isActive }) => {
                return isActive ? activeStyle : deactiveStyle;
              }}
            >
              의사·병원찾기
            </NavLink>
            <NavLink
              to="/mydoc"
              className="my-doc"
              style={({ isActive }) => {
                return isActive ? activeStyle : deactiveStyle;
              }}
              onClick={checkLogin}
            >
              MY 병원
            </NavLink>
            <LoginModal open={modalOpen} close={closeModal}>
              로그인하신 사용자만 이용이 가능한 서비스입니다.
              <br />
              로그인 페이지로 이동하시겠습니까?
            </LoginModal>
            {props.isLogin && (
              <NavLink
                to="/mychart"
                className="my-chrt"
                style={({ isActive }) => {
                  return isActive ? activeStyle : deactiveStyle;
                }}
              >
                MY 차트
              </NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
