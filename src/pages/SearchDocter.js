import Searchdoc from "../components/Content/Searchdoc";
import HosList from "../components/List/HosList";
import "./pages.css";
import Button from "react-bootstrap/Button";
import { getHosInfo } from "../components/API/api";
import { useEffect, useState } from "react";
import CurrentLocation from "../components/Info/CurrentLocatoin";
import { useLocation } from "react-router-dom";

let department = [
  "전체",
  "내과",
  "한방내과",
  "소아청소년과",
  "침구과",
  "피부과",
  "정형외과",
  "한방부인과",
  "한방소아과",
  "치과",
  "한방안·이비인후·피부과",
  "한방신경정신과",
  "이비인후과",
  "한방재활의학과",
  "외과",
  "사상체질과",
  "가정의학과",
  "신경외과",
  "비뇨의학과",
  "재활의학과",
  "치과보철과",
  "치주과",
  "치과보존과",
  "마취통증의학과",
  "구강악안면외과",
  "소아치과",
  "구강내과",
  "치과교정과",
  "예방치과",
  "신경과",
  "영상치의학과",
  "영상의학과",
  "산부인과",
  "구강병리과",
  "안과",
  "정신건강의학과",
  "성형외과",
  "통합치의학과",
  "진단검사의학과",
  "한방응급",
  "심장혈관흉부외과",
  "병리과",
  "응급의학과",
  "직업환경의학과",
  "방사선종양학과",
  "예방의학과",
  "핵의학과",
  "결핵과",
  "비뇨기과",
  "흉부외과",
  "한방안이비인후피부과",
];

function SearchDoctor() {
  const location = useLocation();
  let id;
  if (!location.state) id = 0;
  else id = location.state;
  const [items, setItems] = useState([]);
  const [paramOptions, setParamOptions] = useState({
    sido: "전체",
    sggu: "전체",
    depart: department[id],
  });
  const [pageNum, setPageNum] = useState(0);
  // const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async (options) => {
    const num = 1;
    setIsLoading(true);
    const items = await getHosInfo(options);
    setIsLoading(false);
    if (options.pageNum === 0) {
      setItems(items);
    } else {
      setItems((prevItems) => [...prevItems, ...items]);
    }
    setPageNum(options.pageNum + num);
  };

  const handleLoadMore = async () => {
    await handleLoad({
      pageNum,
      pageSize: 10,
      sido: `${paramOptions.sido}`,
      sggu: `${paramOptions.sggu}`,
      depart: `${paramOptions.depart}`,
    });
  };

  useEffect(() => {
    handleLoad({
      pageNum: 0,
      pageSize: 10,
      sido: `${paramOptions.sido}`,
      sggu: `${paramOptions.sggu}`,
      depart: `${paramOptions.depart}`,
    });
  }, [paramOptions.depart]);

  return (
    <>
      <div className="main">
        <div className="p">의사·병원찾기</div>
        <Searchdoc setData={setParamOptions} />
      </div>
      <div className="content hos_list_top">
        <HosList items={items} />
        <Button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </Button>
      </div>
    </>
  );
}

export default SearchDoctor;
