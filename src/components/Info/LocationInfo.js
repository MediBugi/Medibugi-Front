import "./Info.css";
import NaverMapApi from "./Map/NaverMapApi";
import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";

function LocationInfo({ item }) {
  return (
    <>
      <section className="font-size">
      <div className="header_1">위치 정보</div>
        <br></br>
        <div className="content-flex margin">
          <NavermapsProvider ncpClientId="uqmidslyyv">
            <MapDiv
              style={{
                width: "80%",
                height: "500px",
              }}
            >
              <NaverMapApi item={item}></NaverMapApi>
            </MapDiv>
          </NavermapsProvider>
        </div>
      </section>
    </>
  );
}

export default LocationInfo;
