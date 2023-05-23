import { useState } from "react";
import RatingInput from "./RatingInput";
import "./ReviewForm.css";
import { createReview } from "../../API/api";

function ReviewForm({ item, data, onCreateSuccess }) {
  const [values, setValues] = useState({
    rating: 0,
    content: "",
  });
  const INITIAL_VALUES = {
    rating: 0,
    content: "",
  };
  let writeTime = new Date().getTime();

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.rating && values.content) {
      const formData = new FormData();
      formData.append("rating", values.rating);
      formData.append("content", values.content);
      formData.append("writeTime", writeTime);
      const result = await createReview({
        formData: formData,
        memberid: data,
        hoscnt: item.hoscnt,
      });
      setValues(INITIAL_VALUES);
      onCreateSuccess(result);
    }
  };

  return (
    <form className={`ReviewForm`} onSubmit={handleSubmit}>
      <div className="ReviewForm-rows">
        <div className="ReviewForm-title" name="title">
          {item.yadmNm}
        </div>
        <div className="ReviewForm-title-rating">
          <RatingInput
            className="ReviewForm-rating"
            name="rating"
            value={values.rating}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="ReviewForm-content"
          name="content"
          value={values.content}
          placeholder="리뷰 내용을 작성해 주세요"
          onChange={handleInputChange}
        />
        <div className="ReviewForm-error-buttons">
          <div className="ReviewForm-buttons">
            <button className="ReviewForm-submit-button" type="submit">
              리뷰 저장
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
