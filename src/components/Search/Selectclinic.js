import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import "./Search.css";
import { useLocation } from "react-router-dom";

let sidoOptions = [
  { value: "part_0", label: "전체" },
  { value: "part_SF000", label: "서울" },
  { value: "part_SM000", label: "부산" },
  { value: "part_ST000", label: "대구" },
  { value: "part_SX000", label: "인천" },
  { value: "part_SW000", label: "광주" },
  { value: "part_SU000", label: "대전" },
  { value: "part_SY000", label: "울산" },
  { value: "part_SI000", label: "세종시" },
  { value: "part_SA000", label: "경기" },
  { value: "part_SD000", label: "강원" },
  { value: "part_SN000", label: "충북" },
  { value: "part_SB000", label: "충남" },
  { value: "part_SZ000", label: "전북" },
  { value: "part_SK000", label: "전남" },
  { value: "part_SL000", label: "경북" },
  { value: "part_SC000", label: "경남" },
  { value: "part_SS000", label: "제주" },
];

let seoulOptions = [
  { label: "전체" },
  { label: "강남구" },
  { label: "강동구" },
  { label: "강북구" },
  { label: "강서구" },
  { label: "관악구" },
  { label: "광진구" },
  { label: "구로구" },
  { label: "금천구" },
  { label: "노원구" },
  { label: "도봉구" },
  { label: "동대문구" },
  { label: "동작구" },
  { label: "마포구" },
  { label: "서대문구" },
  { label: "서초구" },
  { label: "성동구" },
  { label: "성북구" },
  { label: "송파구" },
  { label: "양천구" },
  { label: "영등포구" },
  { label: "용산구" },
  { label: "은평구" },
  { label: "종로구" },
  { label: "중구" },
  { label: "중랑구" },
];
let busanOptions = [
  { label: "전체" },
  { label: "부산강서구" },
  { label: "부산금정구" },
  { label: "부산기장군" },
  { label: "부산남구" },
  { label: "부산동구" },
  { label: "부산동래구" },
  { label: "부산진구" },
  { label: "부산북구" },
  { label: "부산사상구" },
  { label: "부산사하구" },
  { label: "부산서구" },
  { label: "부산수영구" },
  { label: "부산연제구" },
  { label: "부산영도구" },
  { label: "부산중구" },
  { label: "부산해운대구" },
];
let daeguOptions = [
  { label: "전체" },
  { label: "대구남구" },
  { label: "대구달서구" },
  { label: "대구달성군" },
  { label: "대구동구" },
  { label: "대구북구" },
  { label: "대구서구" },
  { label: "대구수성구" },
  { label: "대구중구" },
];
let incheonOptions = [
  { label: "전체" },
  { label: "인천강화군" },
  { label: "인천계양구" },
  { label: "인천남구" },
  { label: "인천남동구" },
  { label: "인천동구" },
  { label: "인천미추홀구" },
  { label: "인천부평구" },
  { label: "인천서구" },
  { label: "인천연수구" },
  { label: "인천옹진군" },
  { label: "인천중구" },
];
let kwangjuOptions = [
  { label: "전체" },
  { label: "광주광산구" },
  { label: "광주남구" },
  { label: "광주동구" },
  { label: "광주북구" },
  { label: "광주서구" },
];
let daejunOptions = [
  { label: "전체" },
  { label: "대전대덕구" },
  { label: "대전동구" },
  { label: "대전서구" },
  { label: "대전유성구" },
  { label: "대전중구" },
];
let ulsanOptions = [
  { label: "전체" },
  { label: "울산남구" },
  { label: "울산동구" },
  { label: "울산북구" },
  { label: "울산울주군" },
  { label: "울산중구" },
];
let sejongOptions = [{ label: "전체" }];
let kyungkiOptions = [
  { label: "전체" },
  { label: "가평군" },
  { label: "고양덕양구" },
  { label: "고양일산동구" },
  { label: "고양일산서구" },
  { label: "과천시" },
  { label: "광명시" },
  { label: "광주시" },
  { label: "구리시" },
  { label: "군포시" },
  { label: "김포시" },
  { label: "남양주시" },
  { label: "동두천시" },
  { label: "부천시" },
  { label: "성남분당구" },
  { label: "성남수정구" },
  { label: "성남중원구" },
  { label: "수원권선구" },
  { label: "수원영통구" },
  { label: "수원장안구" },
  { label: "수원팔달구" },
  { label: "시흥시" },
  { label: "안산단원구" },
  { label: "안산상록구" },
  { label: "안성시" },
  { label: "안양동안구" },
  { label: "안양만안구" },
  { label: "양주시" },
  { label: "양평군" },
  { label: "여주시" },
  { label: "연천군" },
  { label: "오산시" },
  { label: "용인기흥구" },
  { label: "용인수지구" },
  { label: "용인처인구" },
  { label: "의왕시" },
  { label: "의정부시" },
  { label: "이천시" },
  { label: "파주시" },
  { label: "평택시" },
  { label: "포천시" },
  { label: "하남시" },
  { label: "화성시" },
];
let kangwonOptions = [
  { label: "전체" },
  { label: "강릉시" },
  { label: "고성군" },
  { label: "동해시" },
  { label: "삼척시" },
  { label: "속초시" },
  { label: "양구군" },
  { label: "양양군" },
  { label: "영월군" },
  { label: "원주시" },
  { label: "인제군" },
  { label: "정선군" },
  { label: "철원군" },
  { label: "춘천시" },
  { label: "태백시" },
  { label: "평창군" },
  { label: "홍천군" },
  { label: "화천군" },
  { label: "횡성군" },
];
let chungbukOptions = [
  { label: "전체" },
  { label: "괴산군" },
  { label: "단양군" },
  { label: "보은군" },
  { label: "영동군" },
  { label: "옥천군" },
  { label: "음성군" },
  { label: "제천시" },
  { label: "증평군" },
  { label: "진천군" },
  { label: "청주상당구" },
  { label: "청주서원구" },
  { label: "청주청원구" },
  { label: "청주흥덕구" },
  { label: "충주시" },
];
let chungnamOptions = [
  { label: "전체" },
  { label: "계룡시" },
  { label: "공주시" },
  { label: "금산군" },
  { label: "논산시" },
  { label: "당진시" },
  { label: "보령시" },
  { label: "부여군" },
  { label: "서산시" },
  { label: "서천군" },
  { label: "아산시" },
  { label: "예산군" },
  { label: "천안동남구" },
  { label: "천안서북구" },
  { label: "청양군" },
  { label: "태안군" },
  { label: "홍성군" },
];
let jeonbukOptions = [
  { label: "전체" },
  { label: "고창군" },
  { label: "군산시" },
  { label: "김제시" },
  { label: "남원시" },
  { label: "무주군" },
  { label: "부안군" },
  { label: "순창군" },
  { label: "완주군" },
  { label: "익산시" },
  { label: "임실군" },
  { label: "장수군" },
  { label: "전주덕진구" },
  { label: "전주완산구" },
  { label: "정읍시" },
  { label: "진안군" },
];
let jeonnamOptions = [
  { label: "전체" },
  { label: "강진군" },
  { label: "고흥군" },
  { label: "곡성군" },
  { label: "광양시" },
  { label: "구례군" },
  { label: "나주시" },
  { label: "담양군" },
  { label: "목포시" },
  { label: "무안군" },
  { label: "보성군" },
  { label: "순천시" },
  { label: "신안군" },
  { label: "여수시" },
  { label: "영광군" },
  { label: "영암군" },
  { label: "완도군" },
  { label: "장성군" },
  { label: "장흥군" },
  { label: "진도군" },
  { label: "함평군" },
  { label: "해남군" },
  { label: "화순군" },
];
let kyungbukOptions = [
  { label: "전체" },
  { label: "경산시" },
  { label: "경주시" },
  { label: "고령군" },
  { label: "구미시" },
  { label: "군위군" },
  { label: "김천시" },
  { label: "문경시" },
  { label: "봉화군" },
  { label: "상주시" },
  { label: "성주군" },
  { label: "안동시" },
  { label: "영덕군" },
  { label: "영양군" },
  { label: "영주시" },
  { label: "영천시" },
  { label: "예천군" },
  { label: "울릉군" },
  { label: "울진군" },
  { label: "의성군" },
  { label: "청도군" },
  { label: "청송군" },
  { label: "칠곡군" },
  { label: "포항남구" },
  { label: "포항북구" },
];
let kyungnamOptions = [
  { label: "전체" },
  { label: "거제시" },
  { label: "거창군" },
  { label: "고성군" },
  { label: "김해시" },
  { label: "남해군" },
  { label: "밀양시" },
  { label: "사천시" },
  { label: "산청군" },
  { label: "양산시" },
  { label: "의령군" },
  { label: "진주시" },
  { label: "창녕군" },
  { label: "창원마산합포구" },
  { label: "창원마산회원구" },
  { label: "창원성산구" },
  { label: "창원의창구" },
  { label: "창원진해구" },
  { label: "통영시" },
  { label: "하동군" },
  { label: "함안군" },
  { label: "함양군" },
  { label: "합천군" },
];
let jejuOptions = [
  { label: "전체" },
  { label: "서귀포시" },
  { label: "제주시" },
];

let departOptions = [
  { value: "specialCareIdx", label: "전체" },
  { value: "specialCareIdx_", label: "내과" },
  { value: "specialCareIdx_0", label: "한방내과" },
  { value: "specialCareIdx_1", label: "소아청소년과" },
  { value: "specialCareIdx_2", label: "침구과" },
  { value: "specialCareIdx_3", label: "피부과" },
  { value: "specialCareIdx_4", label: "정형외과" },
  { value: "specialCareIdx_5", label: "한방부인과" },
  { value: "specialCareIdx_6", label: "한방소아과" },
  { value: "specialCareIdx_7", label: "치과" },
  { value: "specialCareIdx_8", label: "한방안·이비인후·피부과" },
  { value: "specialCareIdx_9", label: "한방신경정신과" },
  { value: "specialCareIdx_10", label: "이비인후과" },
  { value: "specialCareIdx_11", label: "한방재활의학과" },
  { value: "specialCareIdx_12", label: "외과" },
  { value: "specialCareIdx_13", label: "사상체질과" },
  { value: "specialCareIdx_14", label: "가정의학과" },
  { value: "specialCareIdx_15", label: "신경외과" },
  { value: "specialCareIdx_16", label: "비뇨의학과" },
  { value: "specialCareIdx_17", label: "재활의학과" },
  { value: "specialCareIdx_18", label: "치과보철과" },
  { value: "specialCareIdx_19", label: "치주과" },
  { value: "specialCareIdx_20", label: "치과보존과" },
  { value: "specialCareIdx_21", label: "마취통증의학과" },
  { value: "specialCareIdx_22", label: "구강악안면외과" },
  { value: "specialCareIdx_23", label: "소아치과" },
  { value: "specialCareIdx_24", label: "구강내과" },
  { value: "specialCareIdx_25", label: "치과교정과" },
  { value: "specialCareIdx_26", label: "예방치과" },
  { value: "specialCareIdx_27", label: "신경과" },
  { value: "specialCareIdx_28", label: "영상치의학과" },
  { value: "specialCareIdx_29", label: "영상의학과" },
  { value: "specialCareIdx_30", label: "산부인과" },
  { value: "specialCareIdx_31", label: "구강병리과" },
  { value: "specialCareIdx_32", label: "안과" },
  { value: "specialCareIdx_33", label: "정신건강의학과" },
  { value: "specialCareIdx_34", label: "성형외과" },
  { value: "specialCareIdx_35", label: "통합치의학과" },
  { value: "specialCareIdx_36", label: "진단검사의학과" },
  { value: "specialCareIdx_37", label: "한방응급" },
  { value: "specialCareIdx_38", label: "심장혈관흉부외과" },
  { value: "specialCareIdx_39", label: "병리과" },
  { value: "specialCareIdx_40", label: "응급의학과" },
  { value: "specialCareIdx_41", label: "직업환경의학과" },
  { value: "specialCareIdx_42", label: "방사선종양학과" },
  { value: "specialCareIdx_43", label: "예방의학과" },
  { value: "specialCareIdx_44", label: "핵의학과" },
  { value: "specialCareIdx_45", label: "결핵과" },
  { value: "specialCareIdx_46", label: "비뇨기과" },
  { value: "specialCareIdx_47", label: "흉부외과" },
  { value: "specialCareIdx_48", label: "한방안이비인후피부과" },
];

const Selectclinic = ({ getDataFromChild }) => {
  const location = useLocation();
  let id;
  if (!location.state) id = 0;
  else id = location.state;

  const [selectValue, setSelectValue] = useState({
    sido: "전체",
    sggu: "전체",
    depart: departOptions[id].label,
  });
  const selectDepartInputRef = useRef(null);

  function handleSubmit() {
    getDataFromChild(selectValue);
  }

  function handleSgguOptions() {
    switch (selectValue.sido) {
      case "전체":
        return sejongOptions;
      case "서울":
        return seoulOptions;
      case "부산":
        return busanOptions;
      case "대구":
        return daeguOptions;
      case "인천":
        return incheonOptions;
      case "광주":
        return kwangjuOptions;
      case "대전":
        return daejunOptions;
      case "울산":
        return ulsanOptions;
      case "세종시":
        return sejongOptions;
      case "경기":
        return kyungkiOptions;
      case "강원":
        return kangwonOptions;
      case "충북":
        return chungbukOptions;
      case "충남":
        return chungnamOptions;
      case "전북":
        return jeonbukOptions;
      case "전남":
        return jeonnamOptions;
      case "경북":
        return kyungbukOptions;
      case "경남":
        return kyungnamOptions;
      case "제주":
        return jejuOptions;
    }
  }
  return (
    <>
      <div className="c1">
        <h5 className="name">지역(시)</h5>
        <Select
          className="basic"
          ref={selectDepartInputRef}
          onChange={(e) => {
            if (e) {
              setSelectValue((prevFromValue) => ({
                ...prevFromValue,
                sido: e.label,
              }));
            }
          }}
          options={sidoOptions}
          placeholder="선택하세요"
          defaultValue={sidoOptions[0]}
        />
      </div>
      <div className="c2">
        <h5 className="name">지역(구)</h5>
        <Select
          className="basic"
          ref={selectDepartInputRef}
          onChange={(e) => {
            if (e) {
              setSelectValue((prevFromValue) => ({
                ...prevFromValue,
                sggu: e.label,
              }));
            }
          }}
          options={handleSgguOptions()}
          placeholder="선택하세요"
          defaultValue={sejongOptions[0]}
        />
      </div>
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
            }
          }}
          options={departOptions}
          placeholder="선택하세요"
          defaultValue={departOptions[id]}
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
