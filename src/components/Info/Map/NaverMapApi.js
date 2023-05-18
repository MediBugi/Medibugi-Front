import { NaverMap, Marker, useNavermaps } from "react-naver-maps";
import { useState } from "react";

function NaverMapApi({ item }) {
  const navermaps = useNavermaps();
  const [map, setMap] = useState(null);

  return (
    <>
      <NaverMap
        zoomControlOptions={{
          position: navermaps.Position.TOP_RIGHT,
        }}
        mapTypeControlOptions={{
          position: navermaps.Position.TOP_LEFT,
        }}
        defaultCenter={new navermaps.LatLng(item.y, item.x)}
        defaultZoom={18}
        minZoom={6}
        maxZoom={21}
        logoControl
        mapDataControl
        mapTypeControl
        zoomControl
        ref={setMap}
      >
        <Marker defaultPosition={new navermaps.LatLng(item.y, item.x)} />
      </NaverMap>
    </>
  );
}

export default NaverMapApi;
