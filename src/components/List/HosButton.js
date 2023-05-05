import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import LoginModal from "../Modal/LoginModal";
import "./hoslist.css";

function DisableBtn(props, {item, data}) {

    const [modalOpen, setModalOpen] = useState(false);
        const checkLogin = (event) => {
          if (!props.isLogin) {
            event.preventDefault();
            setModalOpen(true);
          }
        };
        const closeModal = (e) => {
          e.preventDefault();
          setModalOpen(false);
        };



    const [disable, setDisable] = React.useState(false);
    const Click1=(event)=>{

        event.preventDefault();

        if (!props.isLogin) {
            event.preventDefault();
            setModalOpen(true);
        } else {

            alert('즐겨찾기에 추가 되었습니다!'); 
            setDisable(true);

            console.log("즐겨찾기 추가 -> ", item.yadmNm);


        let PostData = {
            method: 'POST',
            body: JSON.stringify({hoscnt: item.hoscnt, member_id: data}),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(`http://localhost:8080/favorite/add?hoscnt=${item.hoscnt}&member_id=${data}`, PostData);

        console.log("저장 완료111");
        } 
    };

    return (
        <div className="addFavvv">
            <Button variant="contained" color="info" className="addFav" 
            disabled={disable} onClick={Click1} >추가</Button>

            <LoginModal open={modalOpen} close={closeModal}>
            로그인하신 사용자만 이용이 가능한 서비스입니다.<br/>
            로그인 페이지로 이동하시겠습니까?
            </LoginModal>
        </div>
    );
  }

export default DisableBtn;

