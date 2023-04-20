import Searchdoc from "../components/Content/Searchdoc";
import HosList from "../components/List/HosList";
import "./pages.css";
import { getHosInfo } from "../components/API/api";
import { useEffect, useState } from "react";
import mitem from "../components/API/hosDataxy.json";
import { useSearchParams } from "react-router-dom";

function SearchDoctor() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const items = await getHosInfo();
    console.log(items);
    setItems(mitem);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <div className="main">
        <p className="p">의사·병원찾기</p>
        <Searchdoc />
      </div>
      <div className="content hos_list_top">
        <HosList items={items} />
      </div>
    </>
  );
}

export default SearchDoctor;
