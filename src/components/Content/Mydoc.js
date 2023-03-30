import "./Content.css";

function Mydoc() {
    return (
        <div className="content">
            <p className="interest-doc">
            홍길동님은 3명의 관심 의사가 있습니다.
            </p>

            <hr></hr>

            <table className="table_doc">
            <tr>
                <td rowspan='3'><img src="img/doctor.png" width="100" height="100"/></td>
                <td className="name_doc">송슬기</td>
            </tr>
            <tr>
                <td className="belong_doc">소속병원 : 신세계의원</td>
            </tr>
            <tr>
                <td className="subject_doc">진료과목 : 외과</td>
            </tr>
            </table>


            <table className="table_doc">
            <tr>
                <td rowspan='3'><img src="img/doctor.png" width="100" height="100"/></td>
                <td className="name_doc">강정아</td>
            </tr>
            <tr>
                <td className="belong_doc">소속병원 : 스카이쁘아뜨의원</td>
            </tr>
            <tr>
                <td className="subject_doc">진료과목 : 외과</td>
            </tr>
            </table>


            <table className="table_doc">
            <tr>
                <td rowspan='3'><img src="img/doctor.png" width="100" height="100"/></td>
                <td className="name_doc">백동진</td>
            </tr>
            <tr>
                <td className="belong_doc">소속병원 : 굿프렌마취통증의학과의원원</td>
            </tr>
            <tr>
                <td className="subject_doc">진료과목 : 마취통증의학과</td>
            </tr>
            </table>
        </div>
    );
}

export default Mydoc;
