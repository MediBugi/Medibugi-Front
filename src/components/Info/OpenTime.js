import { ListItemSecondaryAction } from "@mui/material";
import "./Info.css";
import NaverMapApi from "./Map/NaverMapApi";
import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";
function OpenTime({ item }) {
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
<<<<<<< HEAD
                <div className="margin inline-block">
                  {item.chMonStart} ~ {item.chMonEnd}
                </div>
              </li>
              <li>
                <div className="header_3_1">화</div>
                <div className="margin inline-block">
                  {item.chTueStart} ~ {item.chTueEnd}
                </div>
              </li>
              <li>
                <div className="header_3_1">수</div>
                <div className="margin inline-block">
                  {item.chWenStart} ~ {item.chWenEnd}
                </div>
              </li>
              <li>
                <div className="header_3_1">목</div>
                <div className="margin inline-block">
                  {item.chThuStart} ~ {item.chThuEnd}
                </div>
              </li>
              <li>
                <div className="header_3_1">금</div>
                <div className="margin inline-block">
                  {item.chFriStart} ~ {item.chFriEnd}
                </div>
              </li>
              <li>
                <div className="header_3_1">토</div>
                <div className="margin inline-block">
                  {item.chSatStart} ~ {item.chSatEnd}
                </div>
              </li>
              <li>
                <div className="header_3_1">일</div>
                <div className="margin inline-block">
                  {item.chSunStart} ~ {item.chSunEnd}
                </div>
=======
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
>>>>>>> master
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default OpenTime;