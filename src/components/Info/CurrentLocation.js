/*global kakao*/
import { useEffect, useState } from "react";

const CurrentLocation = () => {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  function getAddr(lat, lng) {
    let geocoder = new kakao.maps.services.Geocoder();
    let coord = new kakao.maps.LatLng(lat, lng);
    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        if (result[0].road_address)
          setAddress(result[0].road_address.address_name);
        else setAddress(result[0].address.address_name);
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }

  function getLocation() {
    if (navigator.geolocation) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          function (error) {
            console.error(error);
            resolve({
              latitude: 37.365264512305174,
              longitude: 127.10676860117488,
            });
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity,
          }
        );
      }).then((coords) => {
        setLatitude(coords.latitude);
        setLongitude(coords.longitude);
        return coords;
      });
    }
    console.info("GPS를 지원하지 않습니다");
    return {
      latitude: 37.365264512305174,
      longitude: 127.10676860117488,
    };
  }

  useEffect(() => {
    async function getData() {
      const gsLocation = await getLocation();
      getAddr(gsLocation.latitude, gsLocation.longitude);
    }
    getData();
  }, []);

  return {
    latitude: latitude,
    longitude: longitude,
    address: address,
  };
};

export default CurrentLocation;
