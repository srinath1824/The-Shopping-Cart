import React from "react";
import { Carousel } from "react-bootstrap";
import "./SlideCarousel.css";

export default function SlideCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel"
            height={400}
            alt="carouselimage"
            src="/images/slide4.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            height={400}
            alt="carouselimage"
            src="/images/slide5.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            height={400}
            alt="carouselimage"
            src="/images/slide2.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
