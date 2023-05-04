import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";
import "./ReviewForm.css";

function ReviewForm(initialPreview) {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className={`ReviewForm`} onSubmit={handleSubmit}>
      <FileInput
        className="ReviewForm-preview"
        name="imgFile"
        value={values.imgFile}
        initialPreview={initialPreview}
        onChange={handleChange}
      />
      <div className="ReviewForm-rows">
        <div className="ReviewForm-title-rating">
          {/* 리뷰 타이틀 (치료 목록 등으로 변경) */}
          <input
            className="ReviewForm-title"
            name="title"
            value={values.title}
            placeholder="title placeholder"
            onChange={handleInputChange}
          />
          {/* 별점 */}
          <RatingInput
            className="ReviewForm-rating"
            name="rating"
            value={values.rating}
            onChange={handleChange}
          />
        </div>
        {/* 리뷰 내용 작성 */}
        <textarea
          className="ReviewForm-content"
          name="content"
          value={values.content}
          placeholder="content placeholder"
          onChange={handleInputChange}
        />
        <div className="ReviewForm-error-buttons">
          <div className="ReviewForm-buttons">
            <button className="ReviewForm-submit-button" type="submit">
              confirm button
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
