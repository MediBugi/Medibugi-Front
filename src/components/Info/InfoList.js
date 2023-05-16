import HosInfo from "./HosInfo";
import OpenTime from "./OpenTime";
import Review from "./Review";
import LocationInfo from "./LocationInfo";

function InfoList({ item, currentLocation }) {
  return (
    <>
      <HosInfo item={item}></HosInfo>
      <OpenTime item={item}></OpenTime>
      <LocationInfo
        item={item}
        currentLocation={currentLocation}
      ></LocationInfo>
      <Review item={item}></Review>
    </>
  );
}

export default InfoList;
