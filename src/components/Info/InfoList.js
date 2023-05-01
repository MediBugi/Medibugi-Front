import HosInfo from "./HosInfo";
import OpenTime from "./OpenTime";
import Review from "./Review";
import LocationInfo from "./LocationInfo";

function InfoList({ item }) {
  return (
    <>
      <HosInfo item={item}></HosInfo>
      <OpenTime item={item}></OpenTime>
      <LocationInfo item={item}></LocationInfo>
      <Review></Review>
    </>
  );
}

export default InfoList;
