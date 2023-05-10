import "./Content.css";
import Selectclinic from "../Search/Selectclinic";
import { useState } from "react";

function Searchdoc(props) {
  function getDataFromChild(data) {
    props.setData(data);
  }

  return (
    <>
      <div className="content">
        <div className="search">
          지역과 진료과를 입력해 병원과 의사를 검색해 보세요.
        </div>
        <div>
          <Selectclinic getDataFromChild={getDataFromChild} />
        </div>
      </div>
    </>
  );
}

export default Searchdoc;
