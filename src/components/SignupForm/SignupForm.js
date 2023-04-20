import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Post from './Post';
import axios from 'axios';
import Modal from '../Modal/Modal';
import "./SignupForm.css";

function SignupForm() {
    const [validated, setValidated] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [explain, setExplain] = useState("");
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      if (!disabled) {
        alert("아이디 중복을 확인해 주세요")
      }
      else if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      else {
        const payload = new FormData(form);
        axios.post('http://localhost:8080/member/signup', 
        payload, {
          headers: {
            "Content-Type": 'application/json'
          }
        }).then (res => {
          console.log(res.data)
        }).catch(err => {
          console.log('error: ', err.res)
        });
        document.location.href="/complete";
      }
  
      setValidated(true);
    };

    const openModal = (e) => {
      e.preventDefault();
      var inputId = document.getElementById('inputId').value;
      if (!inputId) {
        setExplain("아이디를 입력해 주세요");
      }
      else {
        axios.post('http://localhost:8080/member/checkId', {
            memberid: inputId
          })
          .then(res => {
            if (res.data === true) {
              setExplain("사용 불가능한 아이디입니다");
              document.getElementById('inputId').value = null;
            }
            else {
              setExplain("사용 가능한 아이디입니다");
              document.getElementById('inputId').readOnly = true;
              setDisabled(true);
            }
          }).catch(err => {
            console.log('error: ', err.res)
          });
      }
      setModalOpen(true);
    };
    const closeModal = (e) => {
      e.preventDefault();
      setModalOpen(false);
    };

    const [myaddr, setmyAddr] = useState({
      address:'',
    });
    
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
      setmyAddr({
          ...myaddr,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleComplete = (data) => {
        setPopup(!popup);
    }
  
    return (
    <div className="signup-form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Form.Group as={Col} md="14" controlId="validationCustom01">
            <Form.Label className="label">아이디</Form.Label>
            <div className="control">
                <Form.Control
                required
                type="text"
                placeholder="아이디를 입력해 주세요"
                name="memberid"
                id="inputId"
                />
                <React.Fragment>
                <button className="checkBtn" onClick={openModal} disabled={disabled}>중복확인</button>
                <Modal open={modalOpen} close={closeModal}>
                  {explain}
                </Modal>
                </React.Fragment>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="14" controlId="validationCustom02">
            <Form.Label className="label">비밀번호</Form.Label>
            <div className="control">
            <Form.Control
              required
              type="text"
              placeholder="비밀번호를 입력해 주세요"
              name="password"
            /></div>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="14" controlId="validationCustom03">
            <Form.Label className="label">이름</Form.Label>
            <div className="control">
            <Form.Control
              required
              type="text"
              placeholder="이름을 입력해 주세요"
              name="name"
            /></div>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="14" controlId="validationCustom04">
            <Form.Label className="label">휴대폰</Form.Label>
            <div className="control">
            <Form.Control
              required
              type="text"
              placeholder="숫자만 입력해 주세요"
              name="telno"
            /></div>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="14" controlId="validationCustom05">
            <Form.Label className="label">주소</Form.Label>
            <div className="control">
            <Form.Control
              required
              type="text"
              placeholder="주소를 입력해 주세요"
              onChange={handleInput}
              value={myaddr.address}
              name="address"
            />
            <button className="addr-btn" type="button" onClick={handleComplete}>주소 검색</button>
            {popup && <Post addr={myaddr} setAddr={setmyAddr}></Post>}
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-2">
            <Form.Group as={Col} md="14" controlId="validationCustom06">
                <Form.Label className="label">성별</Form.Label>
                <div className="control">
                <Form.Check
                    required
                    inline
                    label="남자"
                    name="gender"
                    value="male"
                    type='radio'
                    id='g-male'/>
                <Form.Check
                    required
                    inline
                    label="여자"
                    name="gender"
                    value="female"
                    type='radio'
                    id='g-female'/>
                <Form.Check
                    required
                    inline
                    label="선택안함"
                    name="gender"
                    value="none"
                    type='radio'
                    id='g-none'/>
            </div>
            </Form.Group>
        </Row>
        <Row className="mb-2">
            <Form.Group as={Col} md="14" controlId="validationCustom07">
                <Form.Label className="label">생년월일</Form.Label>
                <div className="control">
                    <Form.Control
                    required
                    type="date" 
                    name="birthday" />
                </div>
            </Form.Group>
        </Row>
        <Button type="submit" className="btn">가입하기</Button>
      </Form>
      </div>
    );
}

export default SignupForm;