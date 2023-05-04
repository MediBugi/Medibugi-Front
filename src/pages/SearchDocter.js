import Searchdoc from "../components/Content/Searchdoc";
import HosList from "../components/List/HosList";
import "./pages.css";
import items from "../components/API/mock.json";
import { getHosInfo } from "../components/API/api";
import { useEffect, useState } from "react";

function SearchDoctor() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const items = await getHosInfo();
    console.log(items);
    setItems(items);
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
      <div className="content">
        <HosList items={items} />
      </div>
    </>
  );
}

export default SearchDoctor;
