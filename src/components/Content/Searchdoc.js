import "./Content.css";
import Selectoption from "../Search/Selectoption";
import Selectclinic from "../Search/Selectclinic";
import Searchbutton from "../Search/Searchbutton";
import HosList from "../List/HosList";

function Searchdoc() {
  return (
    <>
      <div className="content">
        <p className="search">
          지역과 진료과를 입력해 병원과 의사를 검색해 보세요.
        </p>
        <p>
          <Selectclinic />
          {/* <Selectoption /> */}
          <Searchbutton />
        </p>
      </div>
    </>
  );
}

export default Searchdoc;
