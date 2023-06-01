import "./Info.css";
import ReviewForm from "./Review/ReviewForm";
import "./Review.css";
import ticketImg from "./Review/assets/ticket.png";
import { useEffect, useState } from "react";
import Rating from "./Review/Rating";
import { deleteReview, getReviews } from "../API/api";

function formatDate(value) {
  const date = new Date(value);
  return `${date.toLocaleString("ko-KR")}`;
}

function ReviewList({ reviewData, data, onDelete }) {
  const [isLogin, setIsLogin] = useState(false);

  const handleDeleteClick = async () => {
    onDelete({ memberid: data, reviewCnt: reviewData.reviewCnt });
  };

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsLogin(true);
    }
  }, []);
  return (
    <div className="Review-listt">
      <p className="Review-list-id">{reviewData.memberid}</p>
      <Rating className="Review-list-rating" value={reviewData.rating} />
      <p className="Review-list-date">
        {formatDate(Number(reviewData.writeTime))}
      </p>
      <p className="Review-list-content">{reviewData.content}</p>
      {isLogin && reviewData.memberid === data && (
        <button
          className="Review-list-delete-button"
          onClick={handleDeleteClick}
        >
          삭제
        </button>
      )}
    </div>
  );
}

function SortButton({ selected, children, onClick }) {
  return (
    <button
      disabled={selected}
      className={`Review-Sort-button ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Review({ item, data, getReviewCount }) {
  const [sort, setSort] = useState("writeTime");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  const sortedItems = reviewData.sort((a, b) => b[sort] - a[sort]);

  const handleNewestClick = () => setSort("writeTime");

  const handleBestClick = () => setSort("rating");

  const handleLoad = async (options) => {
    setIsLoading(true);
    const reviewList = await getReviews(options);
    setIsLoading(false);

    setReviewData(reviewList);
  };
  console.log(item.code);
  const handleCreateSuccess = (item) => {
    setReviewData((pre) => [item, ...pre]);
  };

  const handleDeleteClick = async (options) => {
    const result = await deleteReview(options);
    if (!result) return;

    setReviewData((pre) =>
      pre.filter((item) => item.reviewCnt !== options.reviewCnt)
    );
  };
  const getGrade = (item) => {
    if (item.length === 0) return 0;
    const sum = item.reduce((acc, current) => acc + current.rating, 0);
    return (sum / item.length).toFixed(1);
  };

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    handleLoad({ code: item.code });
  }, [item.code]);

  useEffect(() => {
    getReviewCount({ grade: getGrade(reviewData), length: reviewData.length });
  }, [reviewData]);
  return (
    <>
      <section className="Review-container font-size">
        <div className="header_1">리뷰</div>
        <br></br>
        {isLogin && (
          <div
            className="Review-ReviewForm"
            style={{
              backgroundImage: `url("${ticketImg}")`,
            }}
          >
            <ReviewForm
              item={item}
              data={data}
              onCreateSuccess={handleCreateSuccess}
            />
          </div>
        )}
        <div>
          <SortButton
            selected={sort === "writeTime"}
            onClick={handleNewestClick}
          >
            최신순
          </SortButton>
          <SortButton selected={sort === "rating"} onClick={handleBestClick}>
            베스트순
          </SortButton>
        </div>
        <div className="Review-ReviewList">
          {sortedItems.map((item) => {
            return (
              <li key={item.reviewCnt}>
                <ReviewList
                  reviewData={item}
                  data={data}
                  onDelete={handleDeleteClick}
                />
              </li>
            );
          })}
          <div className="Review-load-more-button" />
        </div>
      </section>
    </>
  );
}

export default Review;
