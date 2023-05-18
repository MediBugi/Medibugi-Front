import HosInfo from "./HosInfo";
import OpenTime from "./OpenTime";
import Review from "./Review";
import LocationInfo from "./LocationInfo";
import DisableBtn from "./HosButton";
const data = sessionStorage.getItem("user");

function InfoList({ item, currentLocation }) {
  return (
    <>
      <DisableBtn item={item} data={data}></DisableBtn>
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
