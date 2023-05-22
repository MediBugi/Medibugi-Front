import "./hoslist.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import CurrentLocation from "../Info/CurrentLocation";

function getDistance(lat1, lng1, lat2, lng2) {
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lng2-lng1);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return Math.round(d*100)/100;
}

function HosListItem({ item }) {
  const [isLogin, setIsLogin] = useState(false);
  const currentloc = CurrentLocation();
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="hoslist">
      <Link className="hoslist-name" to={"/infolist/info"} state={item}>
        {item.yadmNm}
      </Link>
      <div>
        <span className="hoslist-title">거 &nbsp;&nbsp;&nbsp;&nbsp; 리 : </span><span className="hoslist-detail">{getDistance(currentloc.latitude, currentloc.longitude, item.y, item.x)}km</span>
      </div>
      <div>
        <span className="hoslist-title">주 &nbsp;&nbsp;&nbsp;&nbsp; 소 : </span><span className="hoslist-detail">{item.addr}</span>
      </div>
      <div>
        <span className="hoslist-title">전화번호 : </span><span className="hoslist-detail">{item.telno}</span>
      </div>
      <div>
        <span className="hoslist-title">병원구분 : </span><span className="hoslist-detail">{item.clCdNm}</span>
      </div>
      <div>
        <span className="hoslist-title">진료과목 : </span><span className="hoslist-detail">{item.mediDepart}</span>
      </div>
    </div>
  );
}

function HosList({ items, pageFlag }) {
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(1);
  }, [pageFlag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return (
    <>
      <ul>
        {items.slice(offset, offset + limit).map((item) => {
          return (
            <li key={item.code}>
              <HosListItem item={item} />
            </li>
          );
        })}
      </ul>
      <div className="hoslist-pagination">
        <Pagination
          activePage={page} // 현재 페이지
          itemsCountPerPage={limit} // 한 페이지당 보여줄 아이템 갯수
          totalItemsCount={Math.ceil(items.length / limit)} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={"‹"} // "이전"을 나타낼 텍스트
          nextPageText={"›"} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
          linkClass="page-link"
          itemClass="page-item"
        />
      </div>
    </>
  );
}

export default HosList;
