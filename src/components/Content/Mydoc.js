import "./Content.css";
import ChartDoc from "../ChartDoc/ChartDoc";
import axios from "axios";
import { useEffect, useState } from "react";

function Mydoc() {
  const [data, setData] = useState([]);
  async function getMyInfo() {
    var id = sessionStorage.getItem("user");
    await axios
      .get("http://localhost:8080/member/getMyInfo", {
        params: { memberid: id },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error: ", err.res);
      });
  }

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <div className="content_chart">
      <p>
        <ChartDoc data={data}></ChartDoc>
      </p>
    </div>
  );
}

export default Mydoc;
