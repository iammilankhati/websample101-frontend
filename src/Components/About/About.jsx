import React, { Component } from "react";
import ScrollToTop from "../scrollToTop/Index";
import banner1 from "../../Assets/img/1.jpg";
import Footer from "../Home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import girl from "../../Assets/img/img1.png";
import team1 from "../../Assets/img/team1.jpg";
import team2 from "../../Assets/img/team2.jpg";
import team3 from "../../Assets/img/team3.jpg";
import team4 from "../../Assets/img/team4.jpg";

export class about extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <div className="about">
          <div className="about__banner">
            <img src={banner1} alt="banner" />
            <p>About Us</p>
          </div>

          <div className="about__info">
            <h2 className="about__info--title">Who We Are</h2>
            <div className="about__info--paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam eos eaque nobis, accusantium ut esse molestiae dolor
              eligendi voluptas commodi at corporis officiis omnis impedit nam
              aperiam. Necessitatibus, facilis.
            </div>
          </div>
          <div className="about__awesome">
            <div className="about__awesome--main">
              <h2>Our Awesome Features</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam eos eaque nobis, accusantium ut esse molestiae dolor
                eligendi voluptas commodi at corporis officiis omnis impedit nam
                aperiam. Necessitatibus, facilis.
              </p>
            </div>
            <div className="about__awesome--features">
              <div className="about__awesome--feature">
                <div className="about__awesome--feature__item">
                  <div className="icon">
                    <FontAwesomeIcon icon={["fas", "map"]} className="ic" />
                  </div>
                  <div className="about__awesome--feature__item--side">
                    <h2>PREMIUM SLIDERS INCLUDED</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi illum quae sunt debitis voluptatem quas.
                    </p>
                  </div>
                </div>
                <div className="about__awesome--feature__item">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={["fas", "envelope-open"]}
                      className="ic"
                    />
                  </div>
                  <div className="about__awesome--feature__item--side">
                    <h2>100% RESPONSIVE LAYOUT</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi illum quae sunt debitis voluptatem quas.
                    </p>
                  </div>
                </div>
                <div className="about__awesome--feature__item">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={["fas", "hands-helping"]}
                      className="ic"
                    />
                  </div>
                  <div className="about__awesome--feature__item--side">
                    <h2>SUPPORT SYSTEM</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi illum quae sunt debitis voluptatem quas.
                    </p>
                  </div>
                </div>
              </div>
              <img src={girl} alt="girl" />
            </div>
          </div>
          <div className="about__we">
            <div className="about__we--why">
              <h2>Why Choose Us?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore et expedita neque delectus veniam numquam aperiam
                labore earum praesentium repellat. Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus, cumque?
              </p>
            </div>

            <div className="about__we--solution">
              <h2>Our Solution</h2>
              <ul>
                <li>
                  <a href="">
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      className="arrow"
                    />
                    Accordion Heading Text #1
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      className="arrow"
                    />
                    Accordion Heading Text #1
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      className="arrow"
                    />
                    Accordion Heading Text #1
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      className="arrow"
                    />
                    Accordion Heading Text #1
                  </a>
                </li>
              </ul>
            </div>
            <div className="about__we--expertise">
              <div className="about__we--expertise__item">
                <h6>Management</h6>
                <div className="progress__bar1"></div>
              </div>
              <div className="about__we--expertise__item">
                <h6>Computerized</h6>
                <div className="progress__bar2"></div>
              </div>
              <div className="about__we--expertise__item">
                <h6>Finance</h6>
                <div className="progress__bar3"></div>
              </div>
              <div className="about__we--expertise__item">
                <h6>Management</h6>
                <div className="progress__bar4"></div>
              </div>
            </div>
          </div>

          <div className="our--team">
            <h3>Our Team</h3>
            <div className="wrapper">
              <div className="our--team__item">
                <img src={team1} alt="" />
                <h2>Johne Doe</h2>

                <p>
                  <em>Creative</em>
                </p>
              </div>

              <div className="our--team__item">
                <img src={team2} alt="" />
                <h2>Jennifer</h2>
                <p>
                  <em>Programmer</em>
                </p>
              </div>
              <div className="our--team__item">
                <img src={team3} alt="" />
                <h2>Christean</h2>
                <p>
                  <em>CEO</em>
                </p>
              </div>
              <div className="our--team__item">
                <img src={team4} alt="" />
                <h2>Kerinele rase</h2>
                <p>
                  <em>Manager</em>
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default about;
