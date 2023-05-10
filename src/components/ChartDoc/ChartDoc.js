import axios from "axios";
import { useEffect, useState } from "react";
import "./ChartDoc.css";

function ChartDoc(props) {
  const [data, setData] = useState([]);
  const [nameHos, setNamehos] = useState([]);

  console.log(props.data);

  async function getFavInfo() {
    await axios
      .get("http://localhost:8080/favorite/getFavoriteList", {
        params: { member_id: props.data.memberid },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error: ", err.res);
      });
  }

  const [result, setResult] = useState([]);
  useEffect(() => {
    getFavInfo(); //병원이름 중복 제거
    for (var i = 0; i < data.length; i++) {
      result[i] = data.at(i).hospitalName;
      setResult(result.concat(result[i]));
    }
    console.log("여기요오1=> " + result);
    const result_hosname = [...new Set(result)];
    console.log("여기요오2=> " + result_hosname);
    setNamehos(result_hosname);
  }, []);
  console.log("여기요오3=> " + nameHos);

  return (
    <>
      <div className="content1">
        <p className="interest-doc">
          " {props.data.name} "님은 " {nameHos.length} "곳의 병원에 관심이
          있습니다.
        </p>
        <hr></hr>

        {nameHos.map((item) => {
          return (
            <table className="ChartTable">
              <tr>
                <td rowspan="3">
                  <img src="img/doctor.png" width="100" height="100" />
                </td>
                <td className="name_doc">{item} </td>
                {console.log("여기요오44=> " + item)}
              </tr>

              <tr>
                {/* <td className="belong_doc">소속병원 : {data.hospitalName}신세계의원</td> */}
                <td className="belong_doc">
                  병원구분 : 종합병원 {item.clCdNm}??
                </td>
              </tr>

              <tr>
                <td className="subject_doc">진료과목 : 외과</td>
              </tr>
            </table>
          );
        })}
      </div>
    </>
  );
}

export default ChartDoc;
