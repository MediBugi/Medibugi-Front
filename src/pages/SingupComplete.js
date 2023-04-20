import "./pages.css";

function SignupComplete() {
    const moveToHome = () => {
        document.location.href = "/";
    }
    const moveToLogin = () => {
        document.location.href = "/login";
    }
    return (
        <>
        <p className="complete-p">회원가입이 완료 되었습니다.</p>
        <button className="home-btn" onClick={moveToHome}>홈으로</button>
        <button className="login-btn" onClick={moveToLogin}>로그인</button>
        </>
    );
}

export default SignupComplete;