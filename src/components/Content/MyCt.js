import "./Content.css";
import MyInfo from "../Chart/MyInfo";
import axios from "axios";
import { useEffect, useState } from "react";

function MyCt() {
  const [data, setData] = useState([]);

  async function getMyInfo() {
    var id = sessionStorage.getItem("user");
    await axios
      .get("http://13.209.244.206:8080/member/getMyInfo", {
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
      <MyInfo data={data} />
    </div>
  );
}

export default MyCt;
