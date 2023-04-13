import InfoList from "../components/Info/InfoList";
import { useLocation } from "react-router-dom";

function Info() {
  const location = useLocation();
  const item = location.state;

  return (
    <>
      <div className="main">
        <p className="p">병원 정보</p>
        <div className="info-main">
          <InfoList item={item}></InfoList>;
        </div>
      </div>
    </>
  );
}

export default Info;
