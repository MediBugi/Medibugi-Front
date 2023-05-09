import axios from "axios";
import { useEffect, useState } from "react";
import "./ChartDoc.css";

function ChartDoc(props) {
    const [data ,setData] = useState([]);
    console.log(props.data);

    async function getFavInfo() {
        await axios.get('http://localhost:8080/favorite/getFavoriteList', {
          params: {member_id: props.data.memberid}
        })
        .then(res => {
          setData(res.data);
        }).catch(err => {
        console.log('error: ', err.res)
        });
      }

      const [result, setResult] = useState([]);
    useEffect(() => {
        getFavInfo();
        for(var i=0; i<data.length; i++) {
            // Array hosName[] = data.at(i).hospitalName;
            result[i] = data.at(i).hospitalName;
            setResult(result.concat(result[i]))
        }
        console.log(result)
    }, []);
    
   
    

    return(
        <>
            <div className="content1">
            <p className="interest-doc">
            " {props.data.name} "님은 " {data.length} "곳의 병원에 관심이 있습니다.
            </p>
            <hr></hr>


        
        {/* {result.map((item) => { -> 중복되는 병원이름 제외하기 시도 중.. */}
        {data.map((item) => {
          return (
            
                <table className="ChartTable">
                    <tr>
                        <td rowspan='3'><img src="img/doctor.png" width="100" height="100"/></td>
                        <td className="name_doc">{item.hospitalName} </td>
                    </tr>

                    <tr>
                        {/* <td className="belong_doc">소속병원 : {data.hospitalName}신세계의원</td> */}
                        <td className="belong_doc">병원구분 : 종합병원 {item.clCdNm}??</td>
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