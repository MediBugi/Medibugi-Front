import "./Chart.css";

function Info({data}) {
    return(
        <>
            <table
            border="0"
            width="990"
            height="265"
            cellSpacing="10">
                <tbody>
                <tr>
                    <td className="table11">이름</td>
                    <td className="table22">{data.name}</td>
                </tr>
                <tr>
                    <td className="table11">성별</td>
                    <td className="table22">{data.gender}</td>
                </tr>
                <tr>
                    <td className="table11">생년월일</td>
                    <td className="table22">{data.birthday}</td>
                </tr>
                <tr>
                    <td className="table11">아이디</td>
                    <td className="table22">{data.memberid}</td>
                </tr>
                <tr>
                    <td className="table11">거주지역</td>
                    <td className="table22">{data.address}</td>
                </tr>
                <tr>
                    <td className="table11">전화번호</td>
                    <td className="table22">{data.telno}</td>
                </tr>
                </tbody>
        </table>
        </>
    );
}

export default Info;