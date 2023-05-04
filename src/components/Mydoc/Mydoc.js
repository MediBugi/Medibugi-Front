import "./Doc.css";

function Mydoc() {
    return (
        <div className="content">
            <p className="interest-doc">
            홍길동님은 1명의 관심 의사가 있습니다.
            </p>

            <hr></hr>

            <div className="content_a">
            <img src="img/doctor.png" width="100" height="100"/>
            
            <div >
                <p className="name_doc">dddddddd</p>
                <p className="belong_doc">소속병원 : 신세계의원</p>
                <p className="subject_doc">진료과목 : 외과</p>
                </div>
            </div>

        </div>
    );
}

export default Mydoc;
