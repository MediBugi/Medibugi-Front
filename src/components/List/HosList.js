import "./hoslist.css";
import { Link } from "react-router-dom";

function HosListItem({ item }) {
  return (
    <div className="hoslist">
      <Link to={"/infolist/info"} state={item}>
        {item.yadmNm}
      </Link>
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
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <HosListItem item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HosList;
