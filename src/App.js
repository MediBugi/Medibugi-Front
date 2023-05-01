import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SearchDoctor from "./pages/SearchDocter";
import Info from "./pages/Info";
import MyChart from "./pages/MyChart";
import MyDocter from "./pages/MyDocter";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="infolist">
          <Route index element={<SearchDoctor />} />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="/mydoc" element={<MyDocter />} />
        <Route path="/mychart" element={<MyChart />} />
      </Routes>
    </>
  );
}

export default App;
