import "./Content.css";
import ChartDoc from "../ChartDoc/ChartDoc";
import axios from "axios";
import { useEffect, useState } from "react";

function Mydoc() {
  const [data, setData] = useState([]);
  async function getMyInfo() {
    var id = sessionStorage.getItem("user");
    await axios
      .get("http://13.209.244.206:8080/favorite/getFavoriteList", {
        params: { member_id: id },
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
      <ChartDoc data={data}></ChartDoc>
    </div>
  );
}

export default Mydoc;
