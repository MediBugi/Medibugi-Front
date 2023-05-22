import "./Info.css";

function HosInfo({ item }) {
  const telNum = `tel:${item.telno}`;
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
          <div className="header_3_1">
              주소 :  <span className="telEff">{item.addr}</span>
            </div>
            
            <div className="hosDep">진료과 : <span className="telEff">{item.clCdNm}</span></div>
            <div className="header_3_1">
              전화번호 : <span className="telEff">{item.telno}</span>
              {/* <a href={telNum} className="telEff">
                {item.telno}
              </a> */}
            </div>
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
