import { NaverMap, Marker, useNavermaps } from "react-naver-maps";

function NaverMapApi({ item }) {
  const navermaps = useNavermaps();

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
    >
      <Marker defaultPosition={new navermaps.LatLng(item.y, item.x)} />
    </NaverMap>
  );
}

export default NaverMapApi;
