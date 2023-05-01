import { ListItemSecondaryAction } from "@mui/material";
import "./Info.css";
import NaverMapApi from "./Map/NaverMapApi";
import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";
function OpenTime({ item }) {
  return (
    <>
      <section>
        <h2>위치 & 진료 시간</h2>
        <br></br>
        <div className="content-flex">
          <div>
            <ul className="font-size">
              <li>
                <div className="margin inline-block">월</div>
                <div className="margin inline-block">
                  {item.chMonStart} ~ {item.chMonEnd}
                </div>
              </li>
              <li>
                <div className="margin inline-block">화</div>
                <div className="margin inline-block">
                  {item.chTueStart} ~ {item.chTueEnd}
                </div>
              </li>
              <li>
                <div className="margin inline-block">수</div>
                <div className="margin inline-block">
                  {item.chWenStart} ~ {item.chWenEnd}
                </div>
              </li>
              <li>
                <div className="margin inline-block">목</div>
                <div className="margin inline-block">
                  {item.chThuStart} ~ {item.chThuEnd}
                </div>
              </li>
              <li>
                <div className="margin inline-block">금</div>
                <div className="margin inline-block">
                  {item.chFriStart} ~ {item.chFriEnd}
                </div>
              </li>
              <li>
                <div className="margin inline-block">토</div>
                <div className="margin inline-block">
                  {item.chSatStart} ~ {item.chSatEnd}
                </div>
              </li>
              <li>
                <div className="margin inline-block">일</div>
                <div className="margin inline-block">
                  {item.chSunStart} ~ {item.chSunEnd}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default OpenTime;
