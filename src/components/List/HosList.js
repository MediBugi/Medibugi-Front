import "./hoslist.css";
import { Link } from "react-router-dom";
import DisableBtn from "./HosButton";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

const data = sessionStorage.getItem("user");

function HosListItem({ item }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsLogin(true);
    }
  }, []);

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

function HosList({ items }) {
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const handlePageChange = (page) => {
    setPage(page);
  };
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
          itemsCountPerPage={limit} // 한 페이지랑 보여줄 아이템 갯수
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
