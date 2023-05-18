import CurrentLocation from "./CurrentLocation";
import "./Info.css";
import NaverMapApi from "./Map/NaverMapApi";
import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";
import { Link } from "react-router-dom";
import { initKakao } from "kakao-js-sdk";

function LocationInfo({ item }) {
  initKakao({
    apiKey: "61b7aef6ed3635f5a10e467126230fb8",
  });
  const currentloc = CurrentLocation();
  const openKakaoMapDirections = (e) => {
    e.preventDefault();
    var startLatitude = currentloc.latitude;
    var startLongitude = currentloc.longitude;
    var endLatitude = item.y;
    var endLongitude = item.x;

    var mapOptions = {
      center: new window.kakao.maps.LatLng(startLatitude, startLongitude),
      level: 3,
    };

    var map = new window.kakao.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    var directions = new window.kakao.maps.services.Directions();
    var start = new window.kakao.maps.LatLng(startLatitude, startLongitude);
    var end = new window.kakao.maps.LatLng(endLatitude, endLongitude);

    directions.route({
      start: start,
      end: end,
      map: map,
    });
  };

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
        <button onClick={openKakaoMapDirections}>길찾기</button>
      </section>
    </>
  );
}

export default LocationInfo;
