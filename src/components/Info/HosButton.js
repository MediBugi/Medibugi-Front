import React from "react";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import "./Info.css";
import axios from "axios";

function DisableBtn(props) {
    const [isLogin, setIsLogin] = useState(false);
    const [activeButton, setActiveButton] = useState('button2');
    const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId === 'button1' ? 'button1' : 'button2');
    };
    async function getFavInfo() {
        await axios.get('http://localhost:8080/favorite/getFavoriteList', {
          params: {member_id: props.data}
        })
        .then(res => {
          console.log(res.data);
          for(var i=0; i<res.data.length; i++) {
            if (props.item.yadmNm === res.data.at(i).hospitalName) {
              setActiveButton('button1');
           }
        }}).catch(err => {
        console.log('error: ', err.res)
        });
      }
      
    useEffect(() => {
        getFavInfo();
        if (sessionStorage.getItem("user")) {
          setIsLogin(true);
        }
    }, []);

    const Click1 = (event) => {
      handleButtonClick('button1');
        event.preventDefault();
        alert('즐겨찾기에 추가 되었습니다!');
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
        console.log("즐겨찾기 추가 완료");
    };

    const Click2=(event)=>{
      handleButtonClick('button2');
      event.preventDefault();
      alert('즐겨찾기에서 삭제 되었습니다!'); 
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
    };

    return (
        <div className="addFavvv">
            {isLogin && <Button variant="contained" color="info" className="addFav" 
            disabled={activeButton === 'button1'} onClick={Click1} >추가</Button>}
            {isLogin && <Button disabled={activeButton === 'button2'} onClick={Click2}>삭제</Button>}
        </div>
    );
  }

export default DisableBtn;

