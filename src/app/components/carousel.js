"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cs.css";

const Carousel = ({ images }) => {
  console.log(images);
  const imageStr = images.replace(/{|}|"/g, "");
  const imageArr = imageStr.split(",").map((image) => image.trim());

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {imageArr.map((image, i) => (
        <div key={i}>
          <img src={image} alt={i} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
