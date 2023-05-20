import React from "react";
import useReviews from "../../Hooks/UseReivews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return <div>{reviews.length}</div>;
};

export default Reviews;
