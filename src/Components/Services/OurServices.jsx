import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OurServices = () => {
  return (
    <div className="service__titles">
      <div className="service__title">
        <div className="icons">
          <a href="">
            <FontAwesomeIcon icon={["fas", "user"]} size="2x" />
          </a>
        </div>
        <div className="service__title--info">
          <h2 className="service__title--info__title">Awesome Design </h2>
          <p className="service__title--info__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
            nam impedit nesciunt amet rem!
          </p>
        </div>
      </div>
      <div className="service__title">
        <div className="icons">
          <a href="">
            <FontAwesomeIcon icon={["fas", "star"]} size="2x" />
          </a>
        </div>
        <div className="service__title--info">
          <h2 className="service__title--info__title">FontAwesome</h2>
          <p className="service__title--info__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
            nam impedit nesciunt amet rem!
          </p>
        </div>
      </div>
      <div className="service__title">
        <div className="icons">
          <a href="">
            <FontAwesomeIcon icon={["fas", "book"]} size="2x" />
          </a>
        </div>
        <div className="service__title--info">
          <h2 className="service__title--info__title">Bootstrap</h2>
          <p className="service__title--info__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
            nam impedit nesciunt amet rem!
          </p>
        </div>
      </div>
      <div className="service__title">
        <div className="icons">
          <a href="">
            <FontAwesomeIcon icon={["fas", "home"]} size="2x" />
          </a>
        </div>
        <div className="service__title--info">
          <h2 className="service__title--info__title">SEO Ready</h2>
          <p className="service__title--info__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
            nam impedit nesciunt amet rem!
          </p>
        </div>
      </div>
      <div className="service__title">
        <div className="icons">
          <a href="">
            <FontAwesomeIcon icon={["fas", "flag"]} size="2x" />
          </a>
        </div>
        <div className="service__title--info">
          <h2 className="service__title--info__title">Fully Responsive</h2>
          <p className="service__title--info__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
            nam impedit nesciunt amet rem!
          </p>
        </div>
      </div>
      <div className="service__title">
        <div className="icons">
          <a href="">
            <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
          </a>
        </div>
        <div className="service__title--info">
          <h2 className="service__title--info__title">CSS3 + HTML5</h2>
          <p className="service__title--info__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
            nam impedit nesciunt amet rem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
