import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, NavLink } from "react-router-dom";
import "./Menu.css";
import MyDocter from "../../pages/MyDocter";
import SearchDoctor from "../../pages/SearchDocter";
import Info from "../../pages/Info";
import MyChart from "../../pages/MyChart";

const activeStyle = {
  color: "#0fa2f1",
  textDecoration: "none",
};
const deactiveStyle = {
  color: "black",
  textDecoration: "none",
};

function Menu() {
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
            >
              MY 닥터
            </NavLink>
            <NavLink
              to="/mychart"
              className="my-chrt"
              style={({ isActive }) => {
                return isActive ? activeStyle : deactiveStyle;
              }}
            >
              MY 차트
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/list" element={<SearchDoctor />} />
        <Route path="/mydoc" element={<MyDocter />} />
        <Route path="/mychart" element={<MyChart />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default Menu;
