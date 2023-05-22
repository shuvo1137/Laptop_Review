import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useReviews from "../Hooks/UseReivews";

const ReviewDetails = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useReviews();
  const [review, setReview] = useState([]);

  const findReview = reviews.map((review) => {
    if (review.id === id) {
      console.log("paisi");
      return findReview;
    } else {
      console.log("nai re vai");
    }
  });

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default ReviewDetails;
