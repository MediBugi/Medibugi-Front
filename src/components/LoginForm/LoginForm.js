import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Loginbutton from './Loginbutton';
import "./LoginForm.css";

function LoginForm() {
    return (
    <>
        <div className="content-form">
            <FloatingLabel
                controlId="floatingInput"
                label="아이디"
                className="mb-3">
                <Form.Control type="email" placeholder="아이디" />
            </FloatingLabel>
            <FloatingLabel 
                controlId="floatingPassword" 
                label="비밀번호">
                <Form.Control type="password" placeholder="비밀번호" />
            </FloatingLabel>
            <Loginbutton/>
        </div>
    </>
    );
}

export default LoginForm;