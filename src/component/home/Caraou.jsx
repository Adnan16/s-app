import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Caraou() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-screen-lg">
    <Slider {...settings}>
      {/* Your carousel slides go here */}
      <div className="p-4">
        <img src="https://placekitten.com/300/200" alt="Slide 1" />
      </div>
      <div className="p-4">
        <img src="https://placekitten.com/300/201" alt="Slide 2" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  </div>
  );
}

export default Caraou;
