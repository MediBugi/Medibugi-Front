import axios from "axios";

function DeleteProfile({ data }) {
  const handleDeleteProfile = (e) => {
    e.preventDefault();
    if (window.confirm("확인을 누르면 회원 정보가 삭제됩니다.")) {
      axios
        .delete(`http://13.209.244.206:8080/member/delete/${data.memberid}`, {})
        .then(() => {
          localStorage.clear();
          alert("그동안 이용해주셔서 감사합니다.");
          //   navigate("/");
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      return;
    }
  };
  return <button onClick={handleDeleteProfile}>회원 탈퇴</button>;
}

export default DeleteProfile;
