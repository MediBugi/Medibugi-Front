import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Post from './Post';
import "./SignupForm.css";

function SignupForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
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
                />
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
                    name="group1"
                    type='radio'
                    id='g-male'/>
                <Form.Check
                    required
                    inline
                    label="여자"
                    name="group1"
                    type='radio'
                    id='g-female'/>
                <Form.Check
                    required
                    inline
                    label="선택안함"
                    name="group1"
                    type='radio'
                    id='g-none'/>
            </div>
            </Form.Group>
        </Row>
        <Row className="mb-2">
            <Form.Group as={Col} md="14" controlId="validationCustom07">
                <Form.Label className="label">생년월일</Form.Label>
                <div className="control">
                    <Col xs={4} className="year">
                    <Form.Control required placeholder="YYYY" className="birth" />
                    </Col>
                    <Col xs={3} className="mon">
                    <Form.Control required placeholder="MM" className="birth"/>
                    </Col>
                    <Col xs={3} className="day">
                    <Form.Control required placeholder="DD" className="birth" />
                    </Col>
                </div>
            </Form.Group>
        </Row>
        <Button type="submit" className="btn">가입하기</Button>
      </Form>
      </div>
    );
}

export default SignupForm;