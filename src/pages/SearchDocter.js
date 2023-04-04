import Searchdoc from "../components/Content/Searchdoc";
import HosList from "../components/List/HosList";
import "./pages.css";
import items from "../components/API/mock.json";
import { getHosInfo } from "../components/API/api";

function SearchDoctor() {
  return (
    <>
      <div className="main">
        <p className="p">의사·병원찾기</p>
        <Searchdoc />
      </div>
      <div className="content">
        <HosList items={getHosInfo} />
      </div>
    </>
  );
}

export default SearchDoctor;
