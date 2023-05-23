import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useReviews from "../Hooks/UseReivews";
import reviews from "../Data/reviews.json";
import "./ReviewDetails.css";

const ReviewDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);

  const findReview = reviews.find((review) => review.id === id);
  if (!findReview) {
    return <h1>Something wrong in here</h1>;
  }

  return (
    <div>
      <section class="testimonial-section">
        <div class="testimonial">
          <div class="testimonial-content">
            <div
              class="customer-image"
              style={{
                backgroundImage: `url(${findReview.img})`,
              }}
            ></div>
            <div class="testimonial-text">
              <h1>{findReview.product}</h1>

              <p>"{findReview.Commemts}"</p>
              <h3>{findReview.name}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewDetails;
