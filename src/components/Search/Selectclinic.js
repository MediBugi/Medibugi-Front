import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import "./Search.css";

let departOptions = [
  { value: "part_", label: "전체" },
  { value: "part_PF000", label: "가정의학과" },
  { value: "part_PM000", label: "내과" },
  { value: "part_PT000", label: "마취통증의학과" },
  { value: "part_PX000", label: "병리과" },
  { value: "part_PW000", label: "산부인과" },
  { value: "part_PU000", label: "성형외과" },
  { value: "part_PY000", label: "소아청소년과" },
  { value: "part_PI000", label: "신경외과" },
  { value: "part_PA000", label: "안과" },
  { value: "part_PD000", label: "이비인후과" },
  { value: "part_PN000", label: "정신과" },
  { value: "part_PB000", label: "정형외과" },
  { value: "part_PZ000", label: "치과" },
  { value: "part_PK000", label: "피부과" },
  { value: "part_PL000", label: "흉부외과" },
];

let detailOptions = [
  { value: "specialCareIdx_", label: "전체" },
  { value: "specialCareIdx_0", label: "각종 성인병" },
  { value: "specialCareIdx_1", label: "감기&독감" },
  { value: "specialCareIdx_2", label: "건강검진" },
  { value: "specialCareIdx_3", label: "금연관리" },
  { value: "specialCareIdx_4", label: "대장내시경" },
  { value: "specialCareIdx_5", label: "두드러기" },
  { value: "specialCareIdx_6", label: "디스크" },
  { value: "specialCareIdx_7", label: "만성통증" },
  { value: "specialCareIdx_8", label: "만성피로" },
  { value: "specialCareIdx_9", label: "배뇨장애" },
  { value: "specialCareIdx_10", label: "비만" },
];

const Selectclinic = ({ getDataFromChild }) => {
  const [selectValue, setSelectValue] = useState({
    depart: "",
  });
  const selectDepartInputRef = useRef(null);
  const selectDetailInputRef = useRef(null);
  const location = useLocation();

  function handleSubmit() {
    getDataFromChild(selectValue);
  }

  return (
    <>
      <div className="c1">
        <h5 className="name">진료과</h5>
        <Select
          className="basic"
          ref={selectDepartInputRef}
          onChange={(e) => {
            if (e) {
              setSelectValue((prevFromValue) => ({
                ...prevFromValue,
                depart: e.label,
              }));
            } else {
              setSelectValue("");
            }
          }}
          options={departOptions}
          placeholder="선택하세요"
          defaultValue={"내과"}
        />
      </div>
      <div className="c3">
        <Button className="btn" onClick={handleSubmit}>
          검색
        </Button>
      </div>
    </>
  );
};

export default Selectclinic;
