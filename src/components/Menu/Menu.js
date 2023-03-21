import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, NavLink } from "react-router-dom";
import "./Menu.css";
import MyDocter from '../../pages/MyDocter';
import SearchDoctor from '../../pages/SearchDocter';

const activeStyle = {
    color: '#0fa2f1',
    textDecoration:'none'
}
const deactiveStyle = {
    color: 'black',
    textDecoration: 'none'
}

function Menu() {    
    return(
        <>
        <Navbar className="top-line">
            <Container>
                <Nav className="menu-name">
                    <NavLink to="/list" className="find-doc" style={({isActive})=>{
                        return isActive ? activeStyle : deactiveStyle;
                    }}>의사·병원찾기</NavLink>
                    <NavLink to="/mydoc" className="my-doc" style={({isActive})=>{
                        return isActive ? activeStyle : deactiveStyle;
                    }}>MY 닥터</NavLink>
                </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/list" element={<SearchDoctor />}/>
            <Route path="/mydoc" element={<MyDocter />}/>
        </Routes>
        </>
    );
}

export default Menu;
