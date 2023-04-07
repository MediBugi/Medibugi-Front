import "./hoslist.css";

function HosListItem({ item }) {
  return (
    <div className="hoslist">
      <a>{item.yadmNm}</a>
      <div>
        <div>주 소 : {item.addr}</div>
      </div>
      <div>
        <div>전화번호 : {item.telno}</div>
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
