import "./Info.css";
import NaverMapApi from "./Map/NaverMapApi";
import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";
function OpenTime() {
  return (
    <>
      <section>
        <h2>위치 & 진료 시간</h2>
        <br></br>
        <div class="content-flex">
          <NavermapsProvider ncpClientId="uqmidslyyv">
            <MapDiv
              style={{
                width: "100%",
                height: "500px",
              }}
            >
              <NaverMapApi></NaverMapApi>
            </MapDiv>
          </NavermapsProvider>
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
