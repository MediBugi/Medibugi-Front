import "./Info.css";

function HosInfo({ item }) {
  return (
    <>
      {/* <section className="font-size"> */}
        <div className="content-flex">
          <div className="header_1">병원이름</div>
          <div className="header_2">{item.yadmNm}</div>
          {/* <div>진료중</div> */}
        </div>
      {/* </section> */}
      <section className="font-size">
        <div className="content-flex">
          <div className="header_1">기본정보</div>
          <div>
            <div className="header_3_1">전화번호 : <div className="telEff">{item.telno}</div></div>
            <div className="header_3">
              병원 홈페이지 : <a href={item.hospUrl}>{item.hospUrl}</a>
            </div>
            {/* <div className="header_3">평점</div>
            <div className="header_3">리뷰 수</div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HosInfo;
