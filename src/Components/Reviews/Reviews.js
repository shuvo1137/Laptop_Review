import React from "react";
import useReviews from "../../Hooks/UseReivews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h1>All {reviews.length} reviews</h1>
      <div className="reviews-container">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
