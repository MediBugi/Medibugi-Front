import "./Info.css";

function HosInfo({ item }) {
  return (
    <>
      <section className="font-size">
        <div className="content-flex">
          <h1>{item.title}</h1>
          <div>진료중</div>
        </div>
      </section>
      <section className="font-size">
        <div className="content-flex">
          <h2>기본 정보</h2>
          <div>
            <div className="margin-bottom">전화번호 : {item.tel}</div>
            <div className="margin-bottom">
              병원 홈페이지 : <a href={item.hospUrl}>{item.hospUrl}</a>
            </div>
            <div className="margin-bottom">평점</div>
            <div>리뷰 수</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HosInfo;
