import { NaverMap, Marker, useNavermaps, InfoWindow } from "react-naver-maps";
import { useState, useEffect } from "react";

function NaverMapApi({ item }) {
  const navermaps = useNavermaps();
  const [map, setMap] = useState(null);
  const [infowindow, setInfoWindow] = useState(null);

  function onSuccessGeolocation(position) {
    if (!map || !infowindow) return;

    const location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    map.setCenter(location);
    map.setZoom(10);
    infowindow.setContent(
      '<div style="padding:20px;">' +
        "geolocation.getCurrentPosition() 위치" +
        "</div>"
    );
    infowindow.open(map, location);
    console.log("Coordinates: " + location.toString());
  }

  function onErrorGeolocation() {
    if (!map || !infowindow) return;

    const center = map.getCenter();
    infowindow.setContent(
      '<div style="padding:20px;">' +
        '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
        "latitude: " +
        center.lat() +
        "<br />longitude: " +
        center.lng() +
        "</div>"
    );
    infowindow.open(map, center);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }

  useEffect(() => {
    if (!map || !infowindow) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      var center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }, [map, infowindow]);

  return (
    <NaverMap
      zoomControlOptions={{
        position: navermaps.Position.TOP_RIGHT,
      }}
      mapTypeControlOptions={{
        position: navermaps.Position.TOP_LEFT,
      }}
      defaultCenter={new navermaps.LatLng(item.y, item.x)}
      defaultZoom={18}
      minZoom={10}
      maxZoom={21}
      logoControl
      mapDataControl
      mapTypeControl
      zoomControl
      ref={setMap}
    >
      <Marker defaultPosition={new navermaps.LatLng(item.y, item.x)} />
      {/* <InfoWindow ref={setInfoWindow} /> */}
    </NaverMap>
  );
}

export default NaverMapApi;
