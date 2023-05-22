import "./Info.css";
function OpenTime({ item }) {
  let sunOpen = `${item.chSunStart} ~ ${item.chSunEnd}`;
  return (
    <>
      <section>
        <div className="header_1">위치 & 진료 시간</div>
        <br></br>
        <div className="content-flex">
          <div>
            <ul className="font-size">
              <li>
                <div className="header_3_1">월</div>
                <div className="margin inline-block">{item.receipt_week}</div>
              </li>
              <li>
                <div className="header_3_1">화</div>
                <div className="margin inline-block">{item.receipt_week}</div>
              </li>
              <li>
                <div className="header_3_1">수</div>
                <div className="margin inline-block">{item.receipt_week}</div>
              </li>
              <li>
                <div className="header_3_1">목</div>
                <div className="margin inline-block">{item.receipt_week}</div>
              </li>
              <li>
                <div className="header_3_1">금</div>
                <div className="margin inline-block">{item.receipt_week}</div>
              </li>
              <li>
                <div className="header_3_1">토</div>
                <div className="margin inline-block">{item.receipt_Sat}</div>
              </li>
              <li>
                <div className="header_3_1">일</div>
                <div className="margin inline-block">
                  {item.chSunStart ? item.sunRestDay : sunOpen}
                </div>
              </li>
            </ul>
          </div>
          

          <div className="breakTime">
            <div className="breakTime22">
              <span className="breakTime33">점심시간 : </span>{item.lunchNom}
            </div>
            <div className="breakTime22">
            <span className="breakTime33">공휴일 : </span>{item.restDay}
            </div>
          </div>


            

        </div>
      </section>
    </>
  );
}

export default OpenTime;
