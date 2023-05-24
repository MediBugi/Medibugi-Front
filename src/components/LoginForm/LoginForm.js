import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Loginbutton from "./Loginbutton";
import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ path }) {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <>
      <div className="content-form">
        <FloatingLabel
          controlId="floatingInput"
          label="아이디"
          className="mb-3"
        >
          <Form.Control
            type="email"
            value={inputId}
            onChange={handleInputId}
            placeholder="아이디"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="비밀번호">
          <Form.Control
            type="password"
            value={inputPw}
            onChange={handleInputPw}
            placeholder="비밀번호"
          />
        </FloatingLabel>
        <Loginbutton id={inputId} pw={inputPw} />
      </div>
    </>
  );
}

export default LoginForm;
