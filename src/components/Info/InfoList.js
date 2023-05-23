import HosInfo from "./HosInfo";
import OpenTime from "./OpenTime";
import Review from "./Review";
import LocationInfo from "./LocationInfo";
import DisableBtn from "./HosButton";
import { useState } from "react";
const data = sessionStorage.getItem("user");

function InfoList({ item }) {
  const [reviewCount, setReviewCount] = useState(0);
  const [hosGrade, setHosGrade] = useState(0);
  const getReviewCount = ({ grade, length }) => {
    setHosGrade(grade);
    setReviewCount(length);
  };
  return (
    <>
      <DisableBtn item={item} data={data}></DisableBtn>
      <HosInfo
        item={item}
        hosGrade={hosGrade}
        reviewCount={reviewCount}
      ></HosInfo>
      <OpenTime item={item}></OpenTime>
      <LocationInfo item={item}></LocationInfo>
      <Review item={item} data={data} getReviewCount={getReviewCount}></Review>
    </>
  );
}

export default InfoList;
