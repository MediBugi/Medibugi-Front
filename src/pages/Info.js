import Carousell from "../components/Carousel/Carousel";
import HosInfo from "../components/Info/HosInfo";
import OpenTime from "../components/Info/OpenTime";
import Department from "../components/Info/Department";
import DoctorInfo from "../components/Info/DoctorInfo";
import Review from "../components/Info/Review";

function Info() {
  return (
    <>
      <div className="main">
        <p className="p">병원 정보</p>
        <div className="info-main">
          <Carousell></Carousell>
          <HosInfo></HosInfo>
          <OpenTime></OpenTime>
          <Department></Department>
          <DoctorInfo></DoctorInfo>
          <Review></Review>
        </div>
      </div>
    </>
  );
}

export default Info;
