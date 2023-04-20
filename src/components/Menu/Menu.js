import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, NavLink } from "react-router-dom";
import "./Menu.css";
import MyDocter from "../../pages/MyDocter";
import SearchDoctor from "../../pages/SearchDocter";
import Info from "../../pages/Info";
import MyChart from '../../pages/MyChart';
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
              to="/list"
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
              MY 닥터
            </NavLink>
            <LoginModal open={modalOpen} close={closeModal}>
            로그인하신 사용자만 이용이 가능한 서비스입니다.<br/>
            로그인 페이지로 이동하시겠습니까?
            </LoginModal>
            <NavLink
              to="/info"
              className="find-doc"
              style={({ isActive }) => {
                return isActive ? activeStyle : deactiveStyle;
              }}
            >
              병원 상세
            </NavLink>
            {props.isLogin &&
            <NavLink to="/mychart" className="my-chrt" style={({isActive})=>{
                        return isActive ? activeStyle : deactiveStyle;
                    }}>MY 차트</NavLink>}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/list" element={<SearchDoctor />} />
        <Route path="/mydoc" element={<MyDocter />} />
        <Route path="/mychart" element={<MyChart />}/>
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default Menu;
