import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Menu.css";

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
    </>
  );
}

export default Menu;
