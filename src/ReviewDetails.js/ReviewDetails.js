import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useReviews from "../Hooks/UseReivews";

const ReviewDetails = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useReviews();
  const [review, setReview] = useState([]);
  // useEffect(() => {
  //   console.log("sssss");
  // }, []);

  useEffect(() => {
    const findReview = reviews.find((review) => {
      if (review.id === id) {
        console.log("paisi");
        return findReview;
      } else {
        console.log("nai re vai");
      }
    });
  }, [id, reviews]);

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default ReviewDetails;
