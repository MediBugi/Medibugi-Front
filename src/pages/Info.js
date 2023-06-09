import { useEffect } from "react";
import InfoList from "../components/Info/InfoList";
import { useLocation } from "react-router-dom";
import { ConstructionOutlined, LocationOn } from "@mui/icons-material";

function Info() {
  const location = useLocation();
  const item = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);

    let recent_search = localStorage.getItem("data");
    if (recent_search == null) {
      recent_search = [];
    } else {
      recent_search = JSON.parse(recent_search);
    }

    recent_search.unshift(item);
    recent_search = [...new Map(recent_search.map((m) => [m.hoscnt, m])).values()];
    if (recent_search.length > 4) {
      recent_search.length = 4;
    }
    localStorage.setItem("data", JSON.stringify(recent_search));
  }, []);
  return (
    <>
      <div className="main">
        <div className="p">병원 정보</div>
        <div className="info-main">
          <InfoList item={item}></InfoList>
        </div>
      </div>
    </>
  );
}

export default Info;
