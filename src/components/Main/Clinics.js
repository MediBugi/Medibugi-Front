import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "./Main.css";
import { Button } from "react-bootstrap";
import { Input } from "@mui/material";
import axios from "axios";
const { Configuration, OpenAIApi } = require("openai");

function Clinics() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const [music, setMusic] = useState({ title: "", singer: "" });

  const fetchOpenApi = async () => {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `${userInfo}일 때 가야할 medical department를 리스트로 알려줘`,
        temperature: 0,
        max_tokens: 1000,
      })
      .then((res) => {
        const { choices } = res.data;
        const [title, singer] = choices[0].text.split("by");
        console.log(choices);
        setMusic({ title, singer }); // 음악의 제목, 가수 데이터 저장
      });
    return response;
  };

  return (
    <div className="py-5">
      {/* <Input onChange={(e) => setUserInfo(e.target.value)}></Input>
      <Button onClick={fetchOpenApi}>검색</Button> */}
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="증상을 입력해보세요!" aria-describedby="button-addon2"></input>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
      </div>

    </div>
    
  );
}

export default Clinics;
