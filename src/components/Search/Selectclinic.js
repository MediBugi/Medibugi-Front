import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import "./Search.css";
import { useLocation } from "react-router-dom";

let sidoOptions = [
  { value: "part_0", label: "전체" },
  { value: "part_SF000", label: "서울특별시" },
  { value: "part_SM000", label: "부산광역시" },
  { value: "part_ST000", label: "대구광역시" },
  { value: "part_SX000", label: "인천광역시" },
  { value: "part_SW000", label: "광주광역시" },
  { value: "part_SU000", label: "대전광역시" },
  { value: "part_SY000", label: "울산광역시" },
  { value: "part_SI000", label: "세종특별자치시" },
  { value: "part_SA000", label: "경기도" },
  { value: "part_SD000", label: "강원도" },
  { value: "part_SN000", label: "충청북도" },
  { value: "part_SB000", label: "충청남도" },
  { value: "part_SZ000", label: "전라북도" },
  { value: "part_SK000", label: "전라남도" },
  { value: "part_SL000", label: "경상북도" },
  { value: "part_SC000", label: "경상남도" },
  { value: "part_SS000", label: "제주특별자치도" },
];

let sgguOptions = {
  seoulOptions: [
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
  ],
  busanOptions: [
    { value: "sgguBusan1", label: "전체" },
    { value: "sgguBusan2", label: "강서구" },
    { value: "sgguBusan3", label: "금정구" },
    { value: "sgguBusan4", label: "기장군" },
    { value: "sgguBusan5", label: "남구" },
    { value: "sgguBusan6", label: "동구" },
    { value: "sgguBusan7", label: "동래구" },
    { value: "sgguBusan8", label: "진구" },
    { value: "sgguBusan9", label: "북구" },
    { value: "sgguBusan0", label: "사상구" },
    { value: "sgguBusan11", label: "사하구" },
    { value: "sgguBusan12", label: "서구" },
    { value: "sgguBusan13", label: "수영구" },
    { value: "sgguBusan14", label: "연제구" },
    { value: "sgguBusan15", label: "영도구" },
    { value: "sgguBusan16", label: "중구" },
    { value: "sgguBusan17", label: "해운대구" },
  ],
  daeguOptions: [
    { value: "sgguDaegu1", label: "전체" },
    { value: "sgguDaegu2", label: "남구" },
    { value: "sgguDaegu3", label: "달서구" },
    { value: "sgguDaegu4", label: "달성군" },
    { value: "sgguDaegu5", label: "동구" },
    { value: "sgguDaegu6", label: "북구" },
    { value: "sgguDaegu7", label: "서구" },
    { value: "sgguDaegu8", label: "수성구" },
    { value: "sgguDaegu9", label: "중구" },
  ],
  incheonOptions: [
    { value: "sgguIncheon0", label: "전체" },
    { value: "sgguIncheon1", label: "강화군" },
    { value: "sgguIncheon2", label: "계양구" },
    { value: "sgguIncheon3", label: "남구" },
    { value: "sgguIncheon4", label: "남동구" },
    { value: "sgguIncheon5", label: "동구" },
    { value: "sgguIncheon6", label: "미추홀구" },
    { value: "sgguIncheon7", label: "부평구" },
    { value: "sgguIncheon8", label: "서구" },
    { value: "sgguIncheon9", label: "연수구" },
    { value: "sgguIncheon01", label: "옹진군" },
    { value: "sgguIncheon02", label: "중구" },
  ],
  kwangjuOptions: [
    { value: "sgguKwangju1", label: "전체" },
    { value: "sgguKwangju2", label: "광산구" },
    { value: "sgguKwangju3", label: "남구" },
    { value: "sgguKwangju4", label: "동구" },
    { value: "sgguKwangju5", label: "북구" },
    { value: "sgguKwangju6", label: "서구" },
  ],
  daejunOptions: [
    { value: "sggudaejun1", label: "전체" },
    { value: "sggudaejun2", label: "대덕구" },
    { value: "sggudaejun3", label: "동구" },
    { value: "sggudaejun4", label: "서구" },
    { value: "sggudaejun5", label: "유성구" },
    { value: "sggudaejun6", label: "중구" },
  ],
  ulsanOptions: [
    { value: "sgguUlsan1", label: "전체" },
    { value: "sgguUlsan2", label: "남구" },
    { value: "sgguUlsan3", label: "동구" },
    { value: "sgguUlsan4", label: "북구" },
    { value: "sgguUlsan5", label: "울주군" },
    { value: "sgguUlsan6", label: "중구" },
  ],
  sejongOptions: [{ value: "sgguSejong", label: "전체" }],
  kyungkiOptions: [
    { value: "sgguKyungki1", label: "전체" },
    { value: "sgguKyungki2", label: "가평군" },
    { value: "sgguKyungki3", label: "고양시 덕양구" },
    { value: "sgguKyungki4", label: "고양시 일산동구" },
    { value: "sgguKyungki5", label: "고양시 일산서구" },
    { value: "sgguKyungki6", label: "과천시" },
    { value: "sgguKyungki7", label: "광명시" },
    { value: "sgguKyungki8", label: "광주시" },
    { value: "sgguKyungki9", label: "구리시" },
    { value: "sgguKyungki11", label: "군포시" },
    { value: "sgguKyungki12", label: "김포시" },
    { value: "sgguKyungki13", label: "남양주시" },
    { value: "sgguKyungki14", label: "동두천시" },
    { value: "sgguKyungki15", label: "부천시" },
    { value: "sgguKyungki16", label: "성남시 분당구" },
    { value: "sgguKyungki17", label: "성남시 수정구" },
    { value: "sgguKyungki18", label: "성남시 중원구" },
    { value: "sgguKyungki19", label: "수원시 권선구" },
    { value: "sgguKyungki21", label: "수원시 영통구" },
    { value: "sgguKyungki22", label: "수원시 장안구" },
    { value: "sgguKyungki23", label: "수원시 팔달구" },
    { value: "sgguKyungki24", label: "시흥시" },
    { value: "sgguKyungki25", label: "안산시 단원구" },
    { value: "sgguKyungki26", label: "안산시 상록구" },
    { value: "sgguKyungki27", label: "안성시" },
    { value: "sgguKyungki28", label: "안양시 동안구" },
    { value: "sgguKyungki29", label: "안양시 만안구" },
    { value: "sgguKyungki31", label: "양주시" },
    { value: "sgguKyungki32", label: "양평군" },
    { value: "sgguKyungki33", label: "여주시" },
    { value: "sgguKyungki34", label: "연천군" },
    { value: "sgguKyungki35", label: "오산시" },
    { value: "sgguKyungki36", label: "용인시 기흥구" },
    { value: "sgguKyungki37", label: "용인시 수지구" },
    { value: "sgguKyungki38", label: "용인시 처인구" },
    { value: "sgguKyungki39", label: "의왕시" },
    { value: "sgguKyungki41", label: "의정부시" },
    { value: "sgguKyungki42", label: "이천시" },
    { value: "sgguKyungki43", label: "파주시" },
    { value: "sgguKyungki44", label: "평택시" },
    { value: "sgguKyungki45", label: "포천시" },
    { value: "sgguKyungki46", label: "하남시" },
    { value: "sgguKyungki47", label: "화성시" },
  ],
  kangwonOptions: [
    { value: "sgguKangwon1", label: "전체" },
    { value: "sgguKangwon2", label: "강릉시" },
    { value: "sgguKangwon3", label: "고성군" },
    { value: "sgguKangwon4", label: "동해시" },
    { value: "sgguKangwon5", label: "삼척시" },
    { value: "sgguKangwon6", label: "속초시" },
    { value: "sgguKangwon7", label: "양구군" },
    { value: "sgguKangwon8", label: "양양군" },
    { value: "sgguKangwon9", label: "영월군" },
    { value: "sgguKangwon11", label: "원주시" },
    { value: "sgguKangwon12", label: "인제군" },
    { value: "sgguKangwon13", label: "정선군" },
    { value: "sgguKangwon14", label: "철원군" },
    { value: "sgguKangwon15", label: "춘천시" },
    { value: "sgguKangwon16", label: "태백시" },
    { value: "sgguKangwon17", label: "평창군" },
    { value: "sgguKangwon18", label: "홍천군" },
    { value: "sgguKangwon19", label: "화천군" },
    { value: "sgguKangwon21", label: "횡성군" },
  ],
  chungbukOptions: [
    { value: "sgguChungbuk1", label: "전체" },
    { value: "sgguChungbuk2", label: "괴산군" },
    { value: "sgguChungbuk3", label: "단양군" },
    { value: "sgguChungbuk4", label: "보은군" },
    { value: "sgguChungbuk5", label: "영동군" },
    { value: "sgguChungbuk6", label: "옥천군" },
    { value: "sgguChungbuk7", label: "음성군" },
    { value: "sgguChungbuk8", label: "제천시" },
    { value: "sgguChungbuk9", label: "증평군" },
    { value: "sgguChungbuk11", label: "진천군" },
    { value: "sgguChungbuk12", label: "청주시 상당구" },
    { value: "sgguChungbuk13", label: "청주시 서원구" },
    { value: "sgguChungbuk14", label: "청주시 청원구" },
    { value: "sgguChungbuk15", label: "청주시 흥덕구" },
    { value: "sgguChungbuk16", label: "충주시" },
  ],
  chungnamOptions: [
    { value: "sgguChungnam1", label: "전체" },
    { value: "sgguChungnam2", label: "계룡시" },
    { value: "sgguChungnam3", label: "공주시" },
    { value: "sgguChungnam4", label: "금산군" },
    { value: "sgguChungnam5", label: "논산시" },
    { value: "sgguChungnam6", label: "당진시" },
    { value: "sgguChungnam7", label: "보령시" },
    { value: "sgguChungnam8", label: "부여군" },
    { value: "sgguChungnam9", label: "서산시" },
    { value: "sgguChungnam11", label: "서천군" },
    { value: "sgguChungnam12", label: "아산시" },
    { value: "sgguChungnam13", label: "예산군" },
    { value: "sgguChungnam14", label: "천안시 동남구" },
    { value: "sgguChungnam15", label: "천안시 서북구" },
    { value: "sgguChungnam16", label: "청양군" },
    { value: "sgguChungnam17", label: "태안군" },
    { value: "sgguChungnam18", label: "홍성군" },
  ],
  jeonbukOptions: [
    { value: "sgguJeonbuk1", label: "전체" },
    { value: "sgguJeonbuk2", label: "고창군" },
    { value: "sgguJeonbuk3", label: "군산시" },
    { value: "sgguJeonbuk4", label: "김제시" },
    { value: "sgguJeonbuk5", label: "남원시" },
    { value: "sgguJeonbuk6", label: "무주군" },
    { value: "sgguJeonbuk7", label: "부안군" },
    { value: "sgguJeonbuk8", label: "순창군" },
    { value: "sgguJeonbuk9", label: "완주군" },
    { value: "sgguJeonbuk11", label: "익산시" },
    { value: "sgguJeonbuk12", label: "임실군" },
    { value: "sgguJeonbuk13", label: "장수군" },
    { value: "sgguJeonbuk14", label: "전주시 덕진구" },
    { value: "sgguJeonbuk15", label: "전주시 완산구" },
    { value: "sgguJeonbuk16", label: "정읍시" },
    { value: "sgguJeonbuk17", label: "진안군" },
  ],
  jeonnamOptions: [
    { value: "sgguJeonnam1", label: "전체" },
    { value: "sgguJeonnam2", label: "강진군" },
    { value: "sgguJeonnam3", label: "고흥군" },
    { value: "sgguJeonnam4", label: "곡성군" },
    { value: "sgguJeonnam5", label: "광양시" },
    { value: "sgguJeonnam6", label: "구례군" },
    { value: "sgguJeonnam7", label: "나주시" },
    { value: "sgguJeonnam8", label: "담양군" },
    { value: "sgguJeonnam9", label: "목포시" },
    { value: "sgguJeonnam11", label: "무안군" },
    { value: "sgguJeonnam12", label: "보성군" },
    { value: "sgguJeonnam13", label: "순천시" },
    { value: "sgguJeonnam14", label: "신안군" },
    { value: "sgguJeonnam15", label: "여수시" },
    { value: "sgguJeonnam16", label: "영광군" },
    { value: "sgguJeonnam17", label: "영암군" },
    { value: "sgguJeonnam18", label: "완도군" },
    { value: "sgguJeonnam19", label: "장성군" },
    { value: "sgguJeonnam21", label: "장흥군" },
    { value: "sgguJeonnam22", label: "진도군" },
    { value: "sgguJeonnam23", label: "함평군" },
    { value: "sgguJeonnam24", label: "해남군" },
    { value: "sgguJeonnam25", label: "화순군" },
  ],
  kyungbukOptions: [
    { value: "sgguKyungbuk1", label: "전체" },
    { value: "sgguKyungbuk2", label: "경산시" },
    { value: "sgguKyungbuk3", label: "경주시" },
    { value: "sgguKyungbuk4", label: "고령군" },
    { value: "sgguKyungbuk5", label: "구미시" },
    { value: "sgguKyungbuk6", label: "군위군" },
    { value: "sgguKyungbuk7", label: "김천시" },
    { value: "sgguKyungbuk8", label: "문경시" },
    { value: "sgguKyungbuk9", label: "봉화군" },
    { value: "sgguKyungbuk11", label: "상주시" },
    { value: "sgguKyungbuk12", label: "성주군" },
    { value: "sgguKyungbuk13", label: "안동시" },
    { value: "sgguKyungbuk14", label: "영덕군" },
    { value: "sgguKyungbuk15", label: "영양군" },
    { value: "sgguKyungbuk16", label: "영주시" },
    { value: "sgguKyungbuk17", label: "영천시" },
    { value: "sgguKyungbuk18", label: "예천군" },
    { value: "sgguKyungbuk19", label: "울릉군" },
    { value: "sgguKyungbuk21", label: "울진군" },
    { value: "sgguKyungbuk22", label: "의성군" },
    { value: "sgguKyungbuk23", label: "청도군" },
    { value: "sgguKyungbuk24", label: "청송군" },
    { value: "sgguKyungbuk25", label: "칠곡군" },
    { value: "sgguKyungbuk26", label: "포항시 남구" },
    { value: "sgguKyungbuk27", label: "포항시 북구" },
  ],
  kyungnamOptions: [
    { value: "sgguKyungnam1", label: "전체" },
    { value: "sgguKyungnam2", label: "거제시" },
    { value: "sgguKyungnam3", label: "거창군" },
    { value: "sgguKyungnam4", label: "고성군" },
    { value: "sgguKyungnam5", label: "김해시" },
    { value: "sgguKyungnam6", label: "남해군" },
    { value: "sgguKyungnam7", label: "밀양시" },
    { value: "sgguKyungnam8", label: "사천시" },
    { value: "sgguKyungnam9", label: "산청군" },
    { value: "sgguKyungnam11", label: "양산시" },
    { value: "sgguKyungnam12", label: "의령군" },
    { value: "sgguKyungnam13", label: "진주시" },
    { value: "sgguKyungnam14", label: "창녕군" },
    { value: "sgguKyungnam15", label: "창원시 마산합포구" },
    { value: "sgguKyungnam16", label: "창원시 마산회원구" },
    { value: "sgguKyungnam17", label: "창원시 성산구" },
    { value: "sgguKyungnam18", label: "창원시 의창구" },
    { value: "sgguKyungnam19", label: "창원시 진해구" },
    { value: "sgguKyungnam21", label: "통영시" },
    { value: "sgguKyungnam22", label: "하동군" },
    { value: "sgguKyungnam23", label: "함안군" },
    { value: "sgguKyungnam24", label: "함양군" },
    { value: "sgguKyungnam25", label: "합천군" },
  ],
  jejuOptions: [
    { value: "sgguJeju1", label: "전체" },
    { value: "sgguJeju2", label: "서귀포시" },
    { value: "sgguJeju3", label: "제주시" },
  ],
};

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

const Selectclinic = ({ getDataFromChild, currentLocation }) => {
  const location = useLocation();
  let id;
  if (!location.state) id = 0;
  else id = location.state;
  let initFlag = false;

  if (currentLocation[0]) {
    initFlag = true;
  }

  const [selectValue, setSelectValue] = useState({
    sido: "",
    sggu: "",
    depart: departOptions[id].label,
    page: 1,
  });
  const [initValue, setInitValue] = useState({
    sido: undefined,
    sggu: undefined,
    depart: departOptions[id].label,
  });
  const [sgguOption, setSgguOption] = useState([{}]);
  const [sidoValue, setSidoValue] = useState({});
  const [sgguValue, setSgguValue] = useState({});
  const selectSidoInputRef = useRef(null);
  const selectSgguInputRef = useRef(null);
  const selectDepartInputRef = useRef(null);

  const initSelectValue = () => {
    setSelectValue((pre) => ({
      ...pre,
      sido: currentLocation[0],
      sggu: currentLocation[1],
    }));
    setInitValue((pre) => ({
      ...pre,
      sido: currentLocation[0],
      sggu: currentLocation[1],
    }));
  };

  const handleSetSidoValue = () => {
    sidoOptions.forEach(function (item) {
      if (item.label === selectValue.sido) {
        setSidoValue(item);
      }
    });
  };
  const handleSetSgguValue = () => {
    sgguOption.forEach(function (item) {
      if (item.label === selectValue.sggu) {
        setSgguValue(item);
      }
    });
  };

  function handleSubmit() {
    getDataFromChild(selectValue);
  }

  function handleSgguOptions() {
    switch (selectValue.sido) {
      case "전체":
        setSgguOption(sgguOptions.sejongOptions);
        break;
      case "서울특별시":
        setSgguOption(sgguOptions.seoulOptions);
        break;
      case "부산광역시":
        setSgguOption(sgguOptions.busanOptions);
        break;
      case "대구광역시":
        setSgguOption(sgguOptions.daeguOptions);
        break;
      case "인천광역시":
        setSgguOption(sgguOptions.incheonOptions);
        break;
      case "광주광역시":
        setSgguOption(sgguOptions.kwangjuOptions);
        break;
      case "대전광역시":
        setSgguOption(sgguOptions.daejunOptions);
        break;
      case "울산광역시":
        setSgguOption(sgguOptions.ulsanOptions);
        break;
      case "세종특별자치시":
        setSgguOption(sgguOptions.sejongOptions);
        break;
      case "경기도":
        setSgguOption(sgguOptions.kyungkiOptions);
        break;
      case "강원도":
        setSgguOption(sgguOptions.kangwonOptions);
        break;
      case "충청북도":
        setSgguOption(sgguOptions.chungbukOptions);
        break;
      case "충청남도":
        setSgguOption(sgguOptions.chungnamOptions);
        break;
      case "전라북도":
        setSgguOption(sgguOptions.jeonbukOptions);
        break;
      case "전라남도":
        setSgguOption(sgguOptions.jeonnamOptions);
        break;
      case "경상북도":
        setSgguOption(sgguOptions.kyungbukOptions);
        break;
      case "경상남도":
        setSgguOption(sgguOptions.kyungnamOptions);
        break;
      case "제주특별자치도":
        setSgguOption(sgguOptions.jejuOptions);
        break;
      default:
        setSgguOption(sgguOptions.sejongOptions);
    }
  }

  useEffect(() => {
    initSelectValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initFlag]);

  useEffect(() => {
    getDataFromChild(initValue);
  }, [initValue.sido, initValue.sggu]);

  useEffect(() => {
    handleSgguOptions();
    handleSetSgguValue();
    handleSetSidoValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectValue.sido, selectValue.sggu, sgguOption]);
  return (
    <>
      <div className="c1">
        <h5 className="name">지역(시)</h5>
        <Select
          className="basic"
          value={sidoValue}
          ref={selectSidoInputRef}
          onChange={(e) => {
            if (e) {
              setSelectValue((prevFromValue) => ({
                ...prevFromValue,
                sido: e.label,
                sggu: "전체",
              }));
            }
          }}
          options={sidoOptions}
          placeholder="선택하세요"
          defaultValue={""}
        />
      </div>
      <div className="c2">
        <h5 className="name">지역(구)</h5>
        <Select
          className="basic"
          value={sgguValue}
          ref={selectSgguInputRef}
          onChange={(e) => {
            if (e) {
              setSelectValue((prevFromValue) => ({
                ...prevFromValue,
                sggu: e.label,
              }));
            }
          }}
          options={sgguOption}
          placeholder="선택하세요"
          defaultValue={""}
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
