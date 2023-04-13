import "./hoslist.css";
import { Link } from "react-router-dom";

function HosListItem({ item }) {
  return (
    <div className="hoslist">
      <Link to={"/info"} state={item}>
        <a>{item.title}</a>
      </Link>
      <div>
        <div>주 소 : {item.addr}</div>
      </div>
      <div>
        <div>전화번호 : {item.tel}</div>
      </div>
      <div>
        <div>병원구분</div>
      </div>
      <div>
        <div>진료과목</div>
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
