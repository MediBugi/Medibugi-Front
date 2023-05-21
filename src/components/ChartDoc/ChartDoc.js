import "./ChartDoc.css";

function ChartDoc(props) {
  return (
    <>
      <div className="content1">
        <p className="interest-doc">
          " {props.data.length} "곳의 병원에 관심이 있습니다.
        </p>
        <hr></hr>

        {props.data.map((item)=>{
          return (
            <table className="ChartTable">
              <tbody>
                <tr>
                  <td rowSpan="3">
                    <img src="img/doctor.png" width="100" height="100" />
                  </td>
                  <td className="name_doc">{item.yadmNm}</td>
                </tr>
                <tr>
                  <td className="belong_doc">병원구분 : {item.clCdNm}</td>
                </tr>
                <tr>
                  <td className="subject_doc">진료과목 : {item.mediDepart}</td>
                </tr>
              </tbody>
            </table>
          )
        })}
      </div>
    </>
  );
}

export default ChartDoc;
