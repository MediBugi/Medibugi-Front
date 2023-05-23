import "./Info.css";

function HosInfo({ item, hosGrade, reviewCount }) {
  const telNum = `tel:${item.telno}`;

  return (
    <>
      <div className="content-flex">
        <div className="header_1">병원이름</div>
        <div className="header_2">{item.yadmNm}</div>
      </div>

      <section className="font-size">
        <div className="content-flex">
          <div className="header_1">기본정보</div>
          <div>
            <div className="header_3_1">
              주소 : <span className="telEff">{item.addr}</span>
            </div>

            <div className="hosDep">
              진료과 : <span className="telEff">{item.clCdNm}</span>
            </div>
            <div className="header_3_1">
              전화번호 :{" "}
              <a href={telNum}>
                <span className="telEff">{item.telno}</span>
              </a>
            </div>
            <div className="header_3">
              병원 홈페이지 :{" "}
              <a href={item.hospUrl} target="_blank">
                {item.hospUrl}
              </a>
            </div>
            <div className="header_3">평점 : {hosGrade}</div>
            <div className="header_3">리뷰 수 : {reviewCount}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HosInfo;
