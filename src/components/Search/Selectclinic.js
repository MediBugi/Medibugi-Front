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
  { value: "sgguSeoul1", label: "전체" },
  { value: "sgguSeoul2", label: "강남구" },
  { value: "sgguSeoul3", label: "강동구" },
  { value: "sgguSeoul4", label: "강북구" },
  { value: "sgguSeoul5", label: "강서구" },
  { value: "sgguSeoul6", label: "관악구" },
  { value: "sgguSeoul7", label: "광진구" },
  { value: "sgguSeoul8", label: "구로구" },
  { value: "sgguSeoul9", label: "금천구" },
  { value: "sgguSeoul10", label: "노원구" },
  { value: "sgguSeoul11", label: "도봉구" },
  { value: "sgguSeoul12", label: "동대문구" },
  { value: "sgguSeoul13", label: "동작구" },
  { value: "sgguSeoul14", label: "마포구" },
  { value: "sgguSeoul15", label: "서대문구" },
  { value: "sgguSeoul16", label: "서초구" },
  { value: "sgguSeoul17", label: "성동구" },
  { value: "sgguSeoul18", label: "성북구" },
  { value: "sgguSeoul19", label: "송파구" },
  { value: "sgguSeoul20", label: "양천구" },
  { value: "sgguSeoul21", label: "영등포구" },
  { value: "sgguSeoul22", label: "용산구" },
  { value: "sgguSeoul23", label: "은평구" },
  { value: "sgguSeoul24", label: "종로구" },
  { value: "sgguSeoul25", label: "중구" },
  { value: "sgguSeoul26", label: "중랑구" },
];
let busanOptions = [
  { value: "sgguBusan", label: "전체" },
  { value: "sgguBusan", label: "부산강서구" },
  { value: "sgguBusan", label: "부산금정구" },
  { value: "sgguBusan", label: "부산기장군" },
  { value: "sgguBusan", label: "부산남구" },
  { value: "sgguBusan", label: "부산동구" },
  { value: "sgguBusan", label: "부산동래구" },
  { value: "sgguBusan", label: "부산진구" },
  { value: "sgguBusan", label: "부산북구" },
  { value: "sgguBusan", label: "부산사상구" },
  { value: "sgguBusan", label: "부산사하구" },
  { value: "sgguBusan", label: "부산서구" },
  { value: "sgguBusan", label: "부산수영구" },
  { value: "sgguBusan", label: "부산연제구" },
  { value: "sgguBusan", label: "부산영도구" },
  { value: "sgguBusan", label: "부산중구" },
  { value: "sgguBusan", label: "부산해운대구" },
];
let daeguOptions = [
  { value: "sgguDaegu", label: "전체" },
  { value: "sgguDaegu", label: "대구남구" },
  { value: "sgguDaegu", label: "대구달서구" },
  { value: "sgguDaegu", label: "대구달성군" },
  { value: "sgguDaegu", label: "대구동구" },
  { value: "sgguDaegu", label: "대구북구" },
  { value: "sgguDaegu", label: "대구서구" },
  { value: "sgguDaegu", label: "대구수성구" },
  { value: "sgguDaegu", label: "대구중구" },
];
let incheonOptions = [
  { value: "sgguIncheon", label: "전체" },
  { value: "sgguIncheon", label: "인천강화군" },
  { value: "sgguIncheon", label: "인천계양구" },
  { value: "sgguIncheon", label: "인천남구" },
  { value: "sgguIncheon", label: "인천남동구" },
  { value: "sgguIncheon", label: "인천동구" },
  { value: "sgguIncheon", label: "인천미추홀구" },
  { value: "sgguIncheon", label: "인천부평구" },
  { value: "sgguIncheon", label: "인천서구" },
  { value: "sgguIncheon", label: "인천연수구" },
  { value: "sgguIncheon", label: "인천옹진군" },
  { value: "sgguIncheon", label: "인천중구" },
];
let kwangjuOptions = [
  { value: "sgguKwangju", label: "전체" },
  { value: "sgguKwangju", label: "광주광산구" },
  { value: "sgguKwangju", label: "광주남구" },
  { value: "sgguKwangju", label: "광주동구" },
  { value: "sgguKwangju", label: "광주북구" },
  { value: "sgguKwangju", label: "광주서구" },
];
let daejunOptions = [
  { value: "sggudaejun", label: "전체" },
  { value: "sggudaejun", label: "대전대덕구" },
  { value: "sggudaejun", label: "대전동구" },
  { value: "sggudaejun", label: "대전서구" },
  { value: "sggudaejun", label: "대전유성구" },
  { value: "sggudaejun", label: "대전중구" },
];
let ulsanOptions = [
  { value: "sgguUlsan", label: "전체" },
  { value: "sgguUlsan", label: "울산남구" },
  { value: "sgguUlsan", label: "울산동구" },
  { value: "sgguUlsan", label: "울산북구" },
  { value: "sgguUlsan", label: "울산울주군" },
  { value: "sgguUlsan", label: "울산중구" },
];
let sejongOptions = [{ value: "sgguSejong", label: "전체" }];
let kyungkiOptions = [
  { value: "sgguKyungki", label: "전체" },
  { value: "sgguKyungki", label: "가평군" },
  { value: "sgguKyungki", label: "고양덕양구" },
  { value: "sgguKyungki", label: "고양일산동구" },
  { value: "sgguKyungki", label: "고양일산서구" },
  { value: "sgguKyungki", label: "과천시" },
  { value: "sgguKyungki", label: "광명시" },
  { value: "sgguKyungki", label: "광주시" },
  { value: "sgguKyungki", label: "구리시" },
  { value: "sgguKyungki", label: "군포시" },
  { value: "sgguKyungki", label: "김포시" },
  { value: "sgguKyungki", label: "남양주시" },
  { value: "sgguKyungki", label: "동두천시" },
  { value: "sgguKyungki", label: "부천시" },
  { value: "sgguKyungki", label: "성남분당구" },
  { value: "sgguKyungki", label: "성남수정구" },
  { value: "sgguKyungki", label: "성남중원구" },
  { value: "sgguKyungki", label: "수원권선구" },
  { value: "sgguKyungki", label: "수원영통구" },
  { value: "sgguKyungki", label: "수원장안구" },
  { value: "sgguKyungki", label: "수원팔달구" },
  { value: "sgguKyungki", label: "시흥시" },
  { value: "sgguKyungki", label: "안산단원구" },
  { value: "sgguKyungki", label: "안산상록구" },
  { value: "sgguKyungki", label: "안성시" },
  { value: "sgguKyungki", label: "안양동안구" },
  { value: "sgguKyungki", label: "안양만안구" },
  { value: "sgguKyungki", label: "양주시" },
  { value: "sgguKyungki", label: "양평군" },
  { value: "sgguKyungki", label: "여주시" },
  { value: "sgguKyungki", label: "연천군" },
  { value: "sgguKyungki", label: "오산시" },
  { value: "sgguKyungki", label: "용인기흥구" },
  { value: "sgguKyungki", label: "용인수지구" },
  { value: "sgguKyungki", label: "용인처인구" },
  { value: "sgguKyungki", label: "의왕시" },
  { value: "sgguKyungki", label: "의정부시" },
  { value: "sgguKyungki", label: "이천시" },
  { value: "sgguKyungki", label: "파주시" },
  { value: "sgguKyungki", label: "평택시" },
  { value: "sgguKyungki", label: "포천시" },
  { value: "sgguKyungki", label: "하남시" },
  { value: "sgguKyungki", label: "화성시" },
];
let kangwonOptions = [
  { value: "sgguKangwon", label: "전체" },
  { value: "sgguKangwon", label: "강릉시" },
  { value: "sgguKangwon", label: "고성군" },
  { value: "sgguKangwon", label: "동해시" },
  { value: "sgguKangwon", label: "삼척시" },
  { value: "sgguKangwon", label: "속초시" },
  { value: "sgguKangwon", label: "양구군" },
  { value: "sgguKangwon", label: "양양군" },
  { value: "sgguKangwon", label: "영월군" },
  { value: "sgguKangwon", label: "원주시" },
  { value: "sgguKangwon", label: "인제군" },
  { value: "sgguKangwon", label: "정선군" },
  { value: "sgguKangwon", label: "철원군" },
  { value: "sgguKangwon", label: "춘천시" },
  { value: "sgguKangwon", label: "태백시" },
  { value: "sgguKangwon", label: "평창군" },
  { value: "sgguKangwon", label: "홍천군" },
  { value: "sgguKangwon", label: "화천군" },
  { value: "sgguKangwon", label: "횡성군" },
];
let chungbukOptions = [
  { value: "sgguChungbuk", label: "전체" },
  { value: "sgguChungbuk", label: "괴산군" },
  { value: "sgguChungbuk", label: "단양군" },
  { value: "sgguChungbuk", label: "보은군" },
  { value: "sgguChungbuk", label: "영동군" },
  { value: "sgguChungbuk", label: "옥천군" },
  { value: "sgguChungbuk", label: "음성군" },
  { value: "sgguChungbuk", label: "제천시" },
  { value: "sgguChungbuk", label: "증평군" },
  { value: "sgguChungbuk", label: "진천군" },
  { value: "sgguChungbuk", label: "청주상당구" },
  { value: "sgguChungbuk", label: "청주서원구" },
  { value: "sgguChungbuk", label: "청주청원구" },
  { value: "sgguChungbuk", label: "청주흥덕구" },
  { value: "sgguChungbuk", label: "충주시" },
];
let chungnamOptions = [
  { value: "sgguChungnam", label: "전체" },
  { value: "sgguChungnam", label: "계룡시" },
  { value: "sgguChungnam", label: "공주시" },
  { value: "sgguChungnam", label: "금산군" },
  { value: "sgguChungnam", label: "논산시" },
  { value: "sgguChungnam", label: "당진시" },
  { value: "sgguChungnam", label: "보령시" },
  { value: "sgguChungnam", label: "부여군" },
  { value: "sgguChungnam", label: "서산시" },
  { value: "sgguChungnam", label: "서천군" },
  { value: "sgguChungnam", label: "아산시" },
  { value: "sgguChungnam", label: "예산군" },
  { value: "sgguChungnam", label: "천안동남구" },
  { value: "sgguChungnam", label: "천안서북구" },
  { value: "sgguChungnam", label: "청양군" },
  { value: "sgguChungnam", label: "태안군" },
  { value: "sgguChungnam", label: "홍성군" },
];
let jeonbukOptions = [
  { value: "sgguJeonbuk", label: "전체" },
  { value: "sgguJeonbuk", label: "고창군" },
  { value: "sgguJeonbuk", label: "군산시" },
  { value: "sgguJeonbuk", label: "김제시" },
  { value: "sgguJeonbuk", label: "남원시" },
  { value: "sgguJeonbuk", label: "무주군" },
  { value: "sgguJeonbuk", label: "부안군" },
  { value: "sgguJeonbuk", label: "순창군" },
  { value: "sgguJeonbuk", label: "완주군" },
  { value: "sgguJeonbuk", label: "익산시" },
  { value: "sgguJeonbuk", label: "임실군" },
  { value: "sgguJeonbuk", label: "장수군" },
  { value: "sgguJeonbuk", label: "전주덕진구" },
  { value: "sgguJeonbuk", label: "전주완산구" },
  { value: "sgguJeonbuk", label: "정읍시" },
  { value: "sgguJeonbuk", label: "진안군" },
];
let jeonnamOptions = [
  { value: "sgguJeonnam", label: "전체" },
  { value: "sgguJeonnam", label: "강진군" },
  { value: "sgguJeonnam", label: "고흥군" },
  { value: "sgguJeonnam", label: "곡성군" },
  { value: "sgguJeonnam", label: "광양시" },
  { value: "sgguJeonnam", label: "구례군" },
  { value: "sgguJeonnam", label: "나주시" },
  { value: "sgguJeonnam", label: "담양군" },
  { value: "sgguJeonnam", label: "목포시" },
  { value: "sgguJeonnam", label: "무안군" },
  { value: "sgguJeonnam", label: "보성군" },
  { value: "sgguJeonnam", label: "순천시" },
  { value: "sgguJeonnam", label: "신안군" },
  { value: "sgguJeonnam", label: "여수시" },
  { value: "sgguJeonnam", label: "영광군" },
  { value: "sgguJeonnam", label: "영암군" },
  { value: "sgguJeonnam", label: "완도군" },
  { value: "sgguJeonnam", label: "장성군" },
  { value: "sgguJeonnam", label: "장흥군" },
  { value: "sgguJeonnam", label: "진도군" },
  { value: "sgguJeonnam", label: "함평군" },
  { value: "sgguJeonnam", label: "해남군" },
  { value: "sgguJeonnam", label: "화순군" },
];
let kyungbukOptions = [
  { value: "sgguKyungbuk", label: "전체" },
  { value: "sgguKyungbuk", label: "경산시" },
  { value: "sgguKyungbuk", label: "경주시" },
  { value: "sgguKyungbuk", label: "고령군" },
  { value: "sgguKyungbuk", label: "구미시" },
  { value: "sgguKyungbuk", label: "군위군" },
  { value: "sgguKyungbuk", label: "김천시" },
  { value: "sgguKyungbuk", label: "문경시" },
  { value: "sgguKyungbuk", label: "봉화군" },
  { value: "sgguKyungbuk", label: "상주시" },
  { value: "sgguKyungbuk", label: "성주군" },
  { value: "sgguKyungbuk", label: "안동시" },
  { value: "sgguKyungbuk", label: "영덕군" },
  { value: "sgguKyungbuk", label: "영양군" },
  { value: "sgguKyungbuk", label: "영주시" },
  { value: "sgguKyungbuk", label: "영천시" },
  { value: "sgguKyungbuk", label: "예천군" },
  { value: "sgguKyungbuk", label: "울릉군" },
  { value: "sgguKyungbuk", label: "울진군" },
  { value: "sgguKyungbuk", label: "의성군" },
  { value: "sgguKyungbuk", label: "청도군" },
  { value: "sgguKyungbuk", label: "청송군" },
  { value: "sgguKyungbuk", label: "칠곡군" },
  { value: "sgguKyungbuk", label: "포항남구" },
  { value: "sgguKyungbuk", label: "포항북구" },
];
let kyungnamOptions = [
  { value: "sgguKyungnam", label: "전체" },
  { value: "sgguKyungnam", label: "거제시" },
  { value: "sgguKyungnam", label: "거창군" },
  { value: "sgguKyungnam", label: "고성군" },
  { value: "sgguKyungnam", label: "김해시" },
  { value: "sgguKyungnam", label: "남해군" },
  { value: "sgguKyungnam", label: "밀양시" },
  { value: "sgguKyungnam", label: "사천시" },
  { value: "sgguKyungnam", label: "산청군" },
  { value: "sgguKyungnam", label: "양산시" },
  { value: "sgguKyungnam", label: "의령군" },
  { value: "sgguKyungnam", label: "진주시" },
  { value: "sgguKyungnam", label: "창녕군" },
  { value: "sgguKyungnam", label: "창원마산합포구" },
  { value: "sgguKyungnam", label: "창원마산회원구" },
  { value: "sgguKyungnam", label: "창원성산구" },
  { value: "sgguKyungnam", label: "창원의창구" },
  { value: "sgguKyungnam", label: "창원진해구" },
  { value: "sgguKyungnam", label: "통영시" },
  { value: "sgguKyungnam", label: "하동군" },
  { value: "sgguKyungnam", label: "함안군" },
  { value: "sgguKyungnam", label: "함양군" },
  { value: "sgguKyungnam", label: "합천군" },
];
let jejuOptions = [
  { value: "sgguJeju", label: "전체" },
  { value: "sgguJeju", label: "서귀포시" },
  { value: "sgguJeju", label: "제주시" },
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
