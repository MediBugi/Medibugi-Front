import { useEffect } from "react";
import InfoList from "../components/Info/InfoList";
import { useLocation } from "react-router-dom";
import { ConstructionOutlined, LocationOn } from "@mui/icons-material";

function Info() {
  const location = useLocation();
  const item = location.state;
  console.log(item);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="main">
        <div className="p">병원 정보</div>
        <div className="info-main">
          <InfoList item={item}></InfoList>;
        </div>
      </div>
    </>
  );
}

export default Info;
