import "./Doc.css";

function Mydoc() {
    return (
        <div className="content">
            <p className="interest-doc">
            홍길동님은 00명의 관심 의사가 있습니다.
            </p>

            <hr></hr>
            <img src="img/search.png" className="search_img"/>
            <p className="no-doc">
            등록된 관심 의사가 없습니다.
            </p>

            <p className="abcd">
            관심의사를 추가하시면 해당 의사의 정보를 쉽게 확인할 수 있습니다.
            </p>
        </div>
    );
}

export default Mydoc;
