import "./Info.css";
function OpenTime({ item }) {
  let setTimeFormat = (item) => {
    if (item.length === 3) {
      return "0" + item[0] + ":" + item[1] + item[2];
    } else if (item.length === 4) {
      return item[0] + item[1] + ":" + item[2] + item[3];
    }
  };
  let satOpen = item.chSatStart
    ? `${setTimeFormat(item.chSatStart)} ~ ${setTimeFormat(item.chSatEnd)}`
    : "휴진";
  let sunOpen = item.chSunStart
    ? `${setTimeFormat(item.chSunStart)} ~ ${setTimeFormat(item.chSunEnd)}`
    : "휴진";

  return (
    <>
      <section>
        <div className="header_1">진료 시간</div>
        <br></br>
        <div className="content-flex">
          <div>
            <ul className="font-size">
              <li>
                <div className="header_3_1 header_3_1_1">월</div>
                <div className="margin inline-block">
                  {item.chMonStart ? setTimeFormat(item.chMonStart) : "휴진"} ~{" "}
                  {item.chMonEnd ? setTimeFormat(item.chMonEnd) : "휴진"}
                </div>
              </li>
              <li>
                <div className="header_3_1 header_3_1_1">화</div>
                <div className="margin inline-block">
                  {item.chTueStart ? setTimeFormat(item.chTueStart) : "휴진"} ~{" "}
                  {item.chTueEnd ? setTimeFormat(item.chTueEnd) : "휴진"}
                </div>
              </li>
              <li>
                <div className="header_3_1 header_3_1_1">수</div>
                <div className="margin inline-block">
                  {item.chWenStart ? setTimeFormat(item.chWenStart) : "휴진"} ~{" "}
                  {item.chWenEnd ? setTimeFormat(item.chWenEnd) : "휴진"}
                </div>
              </li>
              <li>
                <div className="header_3_1 header_3_1_1">목</div>
                <div className="margin inline-block">
                  {item.chThuStart ? setTimeFormat(item.chThuStart) : "휴진"} ~{" "}
                  {item.chThuEnd ? setTimeFormat(item.chThuEnd) : "휴진"}
                </div>
              </li>
              <li>
                <div className="header_3_1 header_3_1_1">금</div>
                <div className="margin inline-block">
                  {item.chFriStart ? setTimeFormat(item.chFriStart) : "휴진"} ~{" "}
                  {item.chFriEnd ? setTimeFormat(item.chFriEnd) : "휴진"}
                </div>
              </li>

              <li>
                <div className="header_3_1 header_3_1_1">토 </div>
                <div className="margin inline-block">
                  {item.receipt_Sat ? item.receipt_Sat : satOpen}
                </div>
              </li>
              <li>
                <div className="header_3_1 header_3_1_1">일 </div>
                <div className="margin inline-block">
                  {item.sunRestDay ? item.sunRestDay : sunOpen}
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
