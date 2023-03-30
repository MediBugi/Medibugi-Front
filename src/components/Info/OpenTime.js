import "./Info.css";

function OpenTime() {
  return (
    <>
      <section>
        <h2>위치 & 진료 시간</h2>
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
                <div className="margin inline-block">월</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="margin inline-block">화</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="margin inline-block">수</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="margin inline-block">목</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="margin inline-block">금</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="margin inline-block">토</div>
                <div className="margin inline-block">09:00 ~ 18:00</div>
              </li>
              <li>
                <div className="margin inline-block">일</div>
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
