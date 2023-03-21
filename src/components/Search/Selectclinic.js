import React, {useState, useRef} from "react";
import Select from "react-select";
import "./Search.css";

let options = [
  { value: "part_", label: "전체" },
  { value: "part_PF000", label: "가정의학과" },
  { value: "part_PM000", label: "내과" },
  { value: "part_PT000", label: "마취통증의학과" },
  { value: "part_PX000", label: "방사선종양학과" },
  { value: "part_PW000", label: "병리과" },
  { value: "part_PU000", label: "비교의학과" },
  { value: "part_PY000", label: "산부인과" },
  { value: "part_PI000", label: "산업의학과" },
  { value: "part_PA000", label: "성형외과" },
  { value: "part_PD000", label: "소아청소년과" },
  { value: "part_PN000", label: "신경과" },
  { value: "part_PB000", label: "신경외과" },
];

const Selectclinic = () => {
    const [selectValue, setSelectValue] = useState('');
    const selectInputRef = useRef(null);
    
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
        />
        </div>
        </>
    );	
}

export default Selectclinic;
