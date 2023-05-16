import "./Info.css";
import ReviewForm from "./Review/ReviewForm";
import "./Review.css";
import ticketImg from "./Review/assets/ticket.png";

function Review({ item }) {
  return (
    <>
      <section className="Review-container font-size">
        <div className="header_1">리뷰</div>
        <br></br>
        <div
          className="Review-ReviewForm"
          style={{
            backgroundImage: `url("${ticketImg}")`,
          }}
        >
          <ReviewForm item={item} />
        </div>
        <div className="Review-ReviewList">
          <div className="Review-load-more-button" />
        </div>
      </section>
    </>
  );
}

export default Review;
