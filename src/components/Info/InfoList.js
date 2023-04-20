import Carousell from "../Carousel/Carousel";
import HosInfo from "./HosInfo";
import OpenTime from "./OpenTime";
import Department from "./Department";
import DoctorInfo from "./DoctorInfo";
import Review from "./Review";

function InfoList({ item }) {
  return (
    <>
      <Carousell></Carousell>
      <HosInfo item={item}></HosInfo>
      <OpenTime item={item}></OpenTime>
      <Department></Department>
      <DoctorInfo></DoctorInfo>
      <Review></Review>
    </>
  );
}

export default InfoList;
