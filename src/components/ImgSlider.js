import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

function ImgSlider() {
  return (
    <Wrap>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider-badging.jpg"
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider-scale.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider-badag.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider-scales.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrap>
  );
}

export default ImgSlider;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-top: 20px;
  border: 4px solid transparent;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &:hover {
    border-bottom: 1px solid rgba(75, 250, 250, 1);
    transition-duration: 10s;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
