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
      <div class="review">
        <div class="review-content">
          <img src={img} alt="Reviewer 2"></img>
          <h3>{name}</h3>
          <p>{`"${Commemts}"`}</p>
        </div>
      </div>
    </Link>
  );
};

export default Review;
