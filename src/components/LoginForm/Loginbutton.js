import Button from "react-bootstrap/Button";
import axios from "axios";
import "./LoginForm.css";

function Loginbutton(props) {
  const onClickLogin = (e) => {
    e.preventDefault();

    let id = props.id;
    let pw = props.pw;

    if (!id) {
      return alert("아이디를 입력하세요");
    } else if (!pw) {
      return alert("비밀번호를 입력하세요");
    } else {
      axios
        .post("http://13.209.244.206:8080/member/login", {
          memberid: id,
          password: pw,
        })
        .then((res) => {
          if (res.data.memberid === undefined) {
            alert("입력하신 아이디 또는 비밀번호가 존재하지 않습니다");
          } else if (res.data.memberid === id) {
            sessionStorage.setItem("user", res.data.memberid);
            document.location.href = "/";
          }
        })
        .catch((err) => {
          console.log("error: ", err.res);
        });
    }
  };
  return (
    <>
      <div className="log-btn">
        <Button className="btn" onClick={onClickLogin}>
          로그인
        </Button>
      </div>
      <div className="signup-btn">
        <Button href="/signup" className="btn">
          회원가입
        </Button>
      </div>
    </>
  );
}

export default Loginbutton;
