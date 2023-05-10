import { Link } from "react-router-dom";
import { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

let department = [
  "내과",
  "한방내과",
  "소아청소년과",
  "침구과",
  "피부과",
  "정형외과",
  "한방부인과",
  "한방소아과",
  "치과",
  "한방안·이비인후·피부과",
  "한방신경정신과",
  "이비인후과",
  "한방재활의학과",
  "외과",
  "사상체질과",
  "가정의학과",
  "신경외과",
  "비뇨의학과",
  "재활의학과",
  "치과보철과",
  "치주과",
  "치과보존과",
  "마취통증의학과",
  "구강악안면외과",
  "소아치과",
  "구강내과",
  "치과교정과",
  "예방치과",
  "신경과",
  "영상치의학과",
  "영상의학과",
  "산부인과",
  "구강병리과",
  "안과",
  "정신건강의학과",
  "성형외과",
  "통합치의학과",
  "진단검사의학과",
  "한방응급",
  "심장혈관흉부외과",
  "병리과",
  "응급의학과",
  "직업환경의학과",
  "방사선종양학과",
  "예방의학과",
  "핵의학과",
  "결핵과",
  "비뇨기과",
  "흉부외과",
  "한방안이비인후피부과",
];

function Clinics() {
  const [userInfo, setUserInfo] = useState();
  const [recommend, setRecommend] = useState("");

  const fetchOpenApi = async () => {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `${userInfo}증상이 있을 때 가야 할 medical department를 알려줘`,
        temperature: 0,
        max_tokens: 1000,
      })
      .then((res) => {
        const { choices } = res.data;
        setRecommend(choices[0].text); // 음악의 제목, 가수 데이터 저장
      });
    return response;
  };

  const ai = department.map((depart) => {
    if (recommend.includes(depart)) {
      return depart;
    } else {
      return;
    }
  });

  return (
    <>
      <div className="py-5">
        <div class="input-group mb-3">
          <input
            onChange={(e) => setUserInfo(e.target.value)}
            type="text"
            class="form-control"
            placeholder="증상을 입력해보세요!"
            aria-describedby="button-addon2"
          ></input>
          <button
            onClick={fetchOpenApi}
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            검색
          </button>
        </div>
      </div>
      <div>{recommend}</div>
      <div>
        {ai.map((link, index) => {
          if (link) {
            return (
              <div key={link}>
                <Link to={"/infolist"} state={index + 1}>
                  {link}바로가기
                </Link>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Clinics;
