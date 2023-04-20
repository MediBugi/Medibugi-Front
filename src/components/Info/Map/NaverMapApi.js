import { NaverMap, Marker, useNavermaps } from "react-naver-maps";

function NaverMapApi() {
  const navermaps = useNavermaps();

  return (
    <NaverMap
      zoomControlOptions={{
        position: navermaps.Position.TOP_RIGHT,
      }}
      mapTypeControlOptions={{
        position: navermaps.Position.TOP_LEFT,
      }}
      defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
      defaultZoom={15}
      minZoom={10}
      maxZoom={21}
      logoControl
      mapDataControl
      mapTypeControl
      zoomControl
    >
      <Marker defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)} />
    </NaverMap>
  );
}

export default NaverMapApi;
