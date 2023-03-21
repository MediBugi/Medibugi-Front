import React, {useState, useRef} from "react";
import Select from "react-select";
import "./Search.css";

let options = [
  { value: "specialCareIdx_", label: "전체" },
  { value: "specialCareIdx_0", label: "각종 성인병" },
  { value: "specialCareIdx_1", label: "감기&독감" },
  { value: "specialCareIdx_2", label: "건강검진" },
  { value: "specialCareIdx_3", label: "금연관리" },
  { value: "specialCareIdx_4", label: "대장내시경" },
  { value: "specialCareIdx_5", label: "두드러기" },
  { value: "specialCareIdx_6", label: "디스크" },
  { value: "specialCareIdx_7", label: "만성통증" },
  { value: "specialCareIdx_8", label: "만성피로" },
  { value: "specialCareIdx_9", label: "배뇨장애" },
  { value: "specialCareIdx_10", label: "비만" }
];

const Selectoption = () => {
    const [selectValue, setSelectValue] = useState('');
    const selectInputRef = useRef(null);
    
    return (
        <>
        <div className="c2">
        <h5 className="name">추가옵션</h5>
        <Select
            className="addition"
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

export default Selectoption;
