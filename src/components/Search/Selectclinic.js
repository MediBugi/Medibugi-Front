import React, {useState, useRef} from "react";
import { useLocation } from 'react-router-dom';
import Select from "react-select";
import "./Search.css";

let options = [
  { value: "part_", label: "전체" },
  { value: "part_PF000", label: "가정의학과" },
  { value: "part_PM000", label: "내과" },
  { value: "part_PT000", label: "마취통증의학과" },
  { value: "part_PX000", label: "병리과" },
  { value: "part_PW000", label: "산부인과" },
  { value: "part_PU000", label: "성형외과" },
  { value: "part_PY000", label: "소아청소년과" },
  { value: "part_PI000", label: "신경외과" },
  { value: "part_PA000", label: "안과" },
  { value: "part_PD000", label: "이비인후과" },
  { value: "part_PN000", label: "정신과" },
  { value: "part_PB000", label: "정형외과" },
  { value: "part_PZ000", label: "치과" },
  { value: "part_PK000", label: "피부과" },
  { value: "part_PL000", label: "흉부외과" }
];

const Selectclinic = () => {
    const [selectValue, setSelectValue] = useState('');
    const selectInputRef = useRef(null);
    const location = useLocation();
    let id;
    
    if (!location.state?.id) id = -1;
    else id = location.state?.id;

    return (
        <>
        <div className="c1">
        <h5 className="name">진료과</h5>
        <Select
            className="basic"
            ref={selectInputRef}
            onChange={(e)=>{
                if(e){
                    setSelectValue(e.value);
                } else{
                    setSelectValue("");
                }
            }}
            options={options}
            placeholder="선택하세요"
            defaultValue={options[id]}
        />
        </div>
        </>
    );	
}

export default Selectclinic;
