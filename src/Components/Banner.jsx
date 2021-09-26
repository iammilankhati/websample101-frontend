import React from "react";
import Slider from "react-slick";
import banner1 from "../Assets/img/1.jpg";
import banner2 from "../Assets/img/2.jpg";
const Banner = () => {
  const settings = {
    // infinite: true,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    SlidesToScroll: 1,
    // autoplay: true,
    // dots: true,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="slide">
          {" "}
          <img src={banner1} alt="banner" />
          <div className="banner__info">
            <h1 className="banner__info--title">IT CONSULTING</h1>
            <p className="banner__info--paragraph">
              Lorem, ipsum Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Cum, quos! dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="slide">
          {" "}
          <img src={banner2} alt="banner" />
          <div className="banner__info">
            <h1 className="banner__info--title">STRATEGY AND DESIGN</h1>
            <p className="banner__info--paragraph">
              Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quas, eos? consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
