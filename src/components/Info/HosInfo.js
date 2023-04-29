import "./Info.css";

function HosInfo() {
  return (
    <>

        <div className="content-flex">
          <div className="header_1">병원 이름</div>
          <div className="header_2">진료중</div>
        </div>

      <section className="font-size">
        <div className="content-flex">
        <div className="header_1">기본 정보</div>
          <div>
            <div className="header_3_1">전화번호 : </div> <div className="subbb">02-0000-0000</div>
            <div className="header_3">병원 홈페이지 : </div>
            <div className="header_3">평점</div>
            <div className="header_3">리뷰 수</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HosInfo;