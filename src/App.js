import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Header/>
      <Menu/>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </>
  );
}

export default App;
