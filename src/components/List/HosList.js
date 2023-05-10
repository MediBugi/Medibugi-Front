import "./hoslist.css";
import { Link } from "react-router-dom";
import DisableBtn from "./HosButton";
import React, { useEffect, useState } from "react";

const data = sessionStorage.getItem('user');

function HosListItem({ item }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsLogin(true);
    }
  });

  return (
    
    <div className="hoslist">
      <Link to={"/infolist/info"} state={item}>
        {item.yadmNm}
      </Link>
      <DisableBtn isLogin={isLogin} item={item} data={data}></DisableBtn>
      
      <div>
        <div>주 소 : {item.addr}</div>
      </div>
      <div>
        <div>전화번호 : {item.telno}</div>
      </div>
      <div>
        <div>병원구분 : {item.clCdNm} </div>
      </div>
      <div>
        <div>진료과목 : {item.mediDepart}</div>
      </div>
    </div>
    );
}

function HosList({ items}) {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.code}>
              <HosListItem item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HosList;
