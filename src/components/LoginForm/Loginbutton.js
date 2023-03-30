import Button from 'react-bootstrap/Button';
import "./LoginForm.css";

function Loginbutton() {
    return(
    <>
    <div className="log-btn">
      <Button href="#user" className="btn">로그인</Button>
    </div>
    <div className="signup-btn">
      <Button href="/signup" className="btn">회원가입</Button>
    </div>
    </>
    );
}

export default Loginbutton;