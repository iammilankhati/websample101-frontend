import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gallery1 from "../../Assets/img/gallery1.jpg";
import gallery2 from "../../Assets/img/gallery2.jpg";
import gallery3 from "../../Assets/img/gallery3.jpg";
import gallery4 from "../../Assets/img/gallery4.jpg";
import gallery5 from "../../Assets/img/gallery5.jpg";
import gallery6 from "../../Assets/img/gallery6.jpg";
import gallery7 from "../../Assets/img/gallery7.jpg";
import gallery8 from "../../Assets/img/gallery8.jpg";
export class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="gallery__item">
          <div className="gallery__item--i">
            <img src={gallery1} alt="gallery" />

            <div className="icons">
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  size="2x"
                  className="gallery__icon eye"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "link"]}
                  size="2x"
                  className="gallery__icon link"
                />
              </a>
            </div>
          </div>
          <h6>1st gallery Item</h6>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="gallery__item">
          <div className="gallery__item--i">
            <img src={gallery2} alt="" />
            <div className="icons">
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  size="2x"
                  className="gallery__icon eye"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "link"]}
                  size="2x"
                  className="gallery__icon link"
                />
              </a>
            </div>
          </div>

          <h6>1st gallery Item</h6>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="gallery__item">
          <div className="gallery__item--i">
            <img src={gallery3} alt="" />
            <div className="icons">
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  size="2x"
                  className="gallery__icon eye"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "link"]}
                  size="2x"
                  className="gallery__icon link"
                />
              </a>
            </div>

            <h6>1st gallery Item</h6>
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="gallery__item">
          <div className="gallery__item--i">
            <img src={gallery4} alt="" />

            <div className="icons">
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  size="2x"
                  className="gallery__icon eye"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "link"]}
                  size="2x"
                  className="gallery__icon link"
                />
              </a>
            </div>
          </div>

          <h6>1st gallery Item</h6>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="gallery__item">
          <div className="gallery__item--i">
            <img src={gallery5} alt="" />
            <div className="icons">
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  size="2x"
                  className="gallery__icon eye"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "link"]}
                  size="2x"
                  className="gallery__icon link"
                />
              </a>
            </div>
          </div>

          <h6>1st gallery Item</h6>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="gallery__item">
          <div className="gallery__item--i">
            <img src={gallery6} alt="" />
            <div className="icons">
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  size="2x"
                  className="gallery__icon eye"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "link"]}
                  size="2x"
                  className="gallery__icon link"
                />
              </a>
            </div>
          </div>

          <h6>1st gallery Item</h6>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="gallery__item">
          <div className="gallery__item--i">
            <img src={gallery7} alt="" />
            <div className="icons">
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  size="2x"
                  className="gallery__icon eye"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "link"]}
                  size="2x"
                  className="gallery__icon link"
                />
              </a>
            </div>
          </div>

          <h6>1st gallery Item</h6>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="gallery__item">
          <div className="gallery__item--i">
            <img src={gallery8} alt="" />

            <div className="icons">
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  size="2x"
                  className="gallery__icon eye"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={["fas", "link"]}
                  size="2x"
                  className="gallery__icon link"
                />
              </a>
            </div>
          </div>

          <h6>1st gallery Item</h6>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
      </div>
    );
  }
}

export default Gallery;
