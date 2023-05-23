import CurrentLocation from "./CurrentLocation";
import "./Info.css";
import NaverMapApi from "./Map/NaverMapApi";
import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";
import { Link } from "react-router-dom";

function LocationInfo({ item }) {
  const currentloc = CurrentLocation();
  const url = `http://map.naver.com/index.nhn?slng=${currentloc.longitude}&slat=${currentloc.latitude}&stext=${currentloc.address}&elng=${item.x}&elat=${item.y}&pathType=1&showMap=true&etext=${item.yadmNm}&menu=route`;
  return (
    <>
      <section className="font-size">
        <div className="header_1">위치 정보</div>
        <br></br>
        <div className="content-flex margin">
          <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_API_ID}>
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
        <button>
          <Link target="_blank" to={url}>
            길찾기
          </Link>
        </button>
      </section>
    </>
  );
}

export default LocationInfo;
