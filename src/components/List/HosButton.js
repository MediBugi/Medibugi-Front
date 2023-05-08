import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import LoginModal from "../Modal/LoginModal";
import "./hoslist.css";
import axios from "axios";


function DisableBtn(props) {
  
  const [activeButton, setActiveButton] = useState('button2');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === 'button1' ? 'button1' : 'button2');
  };


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
      handleButtonClick('button1');

        event.preventDefault();

        if (!props.isLogin) {
            event.preventDefault();
            setModalOpen(true);
        } else {

            alert('즐겨찾기에 추가 되었습니다!'); 
            setDisable(true);

            console.log("즐겨찾기 추가 -> ", props.item.yadmNm);

            axios.post('http://localhost:8080/favorite/add', {
                member_id: props.data,
                hoscnt: props.item.hoscnt
            })
                .then(response => {
                 console.log(response.data);
                })
                .catch(error => {
                 console.log(error);
                });  
        
                console.log("저장 완료111");
              }
    };

    const Click2=(event)=>{
      handleButtonClick('button2');
      alert('삭제 되었습니다!'); 
      console.log("즐겨찾기 삭제 -> ", props.item.yadmNm);

      axios.post('http://localhost:8080/favorite/delete', {
                member_id: props.data,
                hoscnt: props.item.hoscnt
            })
                .then(response => {
                 console.log(response.data);
                })
                .catch(error => {
                 console.log(error);
                });  
        
                console.log("삭제 완료222");
    };

    return (
        <div className="addFavvv">
            <Button variant="contained" color="info" className="addFav" 
            disabled={activeButton === 'button1'} onClick={Click1} >추가</Button>
            <Button disabled={activeButton === 'button2'} onClick={Click2}>삭제</Button>

            <LoginModal open={modalOpen} close={closeModal}>
            로그인하신 사용자만 이용이 가능한 서비스입니다.<br/>
            로그인 페이지로 이동하시겠습니까?
            </LoginModal>
        </div>
    );
  }

export default DisableBtn;

