import "./Content.css";
import Selectclinic from "../Search/Selectclinic";

function Searchdoc() {
  return (
    <>
      <div className="content">
        <div className="search">
          지역과 진료과를 입력해 병원과 의사를 검색해 보세요.
        </div>
        <div>
          <Selectclinic />
        </div>
      </div>
    </>
  );
}

export default Searchdoc;
