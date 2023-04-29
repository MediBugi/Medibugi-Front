import "./Info.css";

function OpenTime() {
  return (
    <>
      <section>
      <div className="header_1">위치 & 진료 시간</div>
        <br></br>
        <div class="content-flex">
          <img
            className="map-img"
            src="https://t1.daumcdn.net/cfile/tistory/2636C73D568B80CF2F"
            alt="Map"
          ></img>
          <div>
            <ul className="font-size">
              <li>
                <div className="header_3_1">월</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="header_3_1">화</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="header_3_1">수</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="header_3_1">목</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="header_3_1">금</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="header_3_1">토</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="header_3_1">일</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default OpenTime;