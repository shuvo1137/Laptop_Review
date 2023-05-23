import React from "react";
import useReviews from "../../Hooks/UseReivews";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  const randomReviews = reviews.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div>
      <section class="hero-section">
        <div class="hero-content">
          <div class="left-side">
            <h1>Welcome to Our Website</h1>
            <p>
              Discover a world of possibilities with our innovative products.
            </p>
            <a href="#" class="btn">
              Learn More
            </a>
          </div>
          <div class="right-side">
            <img
              src="https://thumbs.dreamstime.com/b/laptop-computer-travel-37983668.jpg"
              alt="Hero Image"
            ></img>
          </div>
        </div>
      </section>

      <section class="review-section">
        {randomReviews.map((review) => {
          return (
            <div class="review">
              <div class="review-content">
                <img src={review.img} alt="Reviewer 2"></img>
                <h3>{review.name}</h3>
                <p>{`"${review.Commemts}"`}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
