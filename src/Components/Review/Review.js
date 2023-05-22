import React from "react";
import "./Review.css";
import { Link, useNavigate } from "react-router-dom";

const Review = ({ review }) => {
  const { name, id, Commemts, product, img } = review;
  const navigate = useNavigate();
  return (
    // <div navigate={`/reviews/${id}`} className="review-container">
    //   <h4>{name}</h4>
    // </div>
    <Link to={`/reviews/${id}`} className="review-container">
      <h4>{product}</h4>
      <h5>{Commemts}</h5>
      <p>{name}</p>
      <img src={img} alt="" />
    </Link>
  );
};

export default Review;
