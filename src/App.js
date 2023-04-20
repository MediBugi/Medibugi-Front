import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsLogin(true);
    }
  });

  return (
    <>
      <Header isLogin={isLogin} />
      <Menu isLogin={isLogin}/>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </>
  );
}

export default App;
