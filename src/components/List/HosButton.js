import React from "react";
import Button from "@mui/material/Button";
import "./hoslist.css";

function DisableBtn({item}) {

    const [disable, setDisable] = React.useState(false);
    const Click1=()=>{
        alert('즐겨찾기에 추가 되었습니다!'); 
        setDisable(true);

        console.log("즐겨찾기 추가 -> ", item.yadmNm);
    };

    return (
        <div className="addFavvv">
            <Button variant="contained" color="info" className="addFav" disabled={disable} onClick={() => {Click1();} } >추가</Button>
        </div>
    );
  }

export default DisableBtn;
