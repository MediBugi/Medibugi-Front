import Searchdoc from "../components/Content/Searchdoc";
import HosList from "../components/List/HosList";
import "./pages.css";
import Button from "react-bootstrap/Button";
import { getHosInfo } from "../components/API/api";
import { useEffect, useState } from "react";

function SearchDoctor() {
  const [items, setItems] = useState([]);
  const [depart, setDepart] = useState({ depart: "내과" });
  const [pageNum, setPageNum] = useState(0);
  const [hasNext, setHasNext] = useState(false);
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
    await handleLoad({ pageNum, pageSize: 10, depart: `${depart.depart}` });
  };

  useEffect(() => {
    handleLoad({ pageNum: 0, pageSize: 10, depart: `${depart.depart}` });
  }, [depart]);

  return (
    <>
      <div className="main">
        <div className="p">의사·병원찾기</div>
        <Searchdoc setData={setDepart} />
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
