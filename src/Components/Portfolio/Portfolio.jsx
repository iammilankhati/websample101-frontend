import React, { Component } from "react";
import banner1 from "../../Assets/img/1.jpg";
import ScrollToTop from "../scrollToTop/Index";
import Footer from "../Home/Footer";
import Gallery from "./Gallery";
export class portfolio extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <div className="portfolio">
          <div className="portfolio__banner">
            <img src={banner1} alt="banner" />
            <p>Portfolio</p>
          </div>

          <div className="portfolio__info">
            <h2 className="portfolio__info--title">Our Portfolio Glance</h2>
            <div className="portfolio__info--paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam eos eaque nobis, accusantium ut esse molestiae dolor
              eligendi voluptas commodi at corporis officiis omnis impedit nam
              aperiam. Necessitatibus, facilis.
            </div>
          </div>
          <ul className="showcase">
            <li>
              <a href="">All</a>
            </li>
            /
            <li>
              <a href="">ARTWORK</a>
            </li>
            /
            <li>
              <a href="">CREATIVE</a>
            </li>
            /
            <li>
              <a href="">NATURE</a>
            </li>
            /
            <li>
              <a href="">OUTSIDE</a>
            </li>
            /
            <li>
              <a href="">PHOTOGRAPHY</a>
            </li>
          </ul>
          <Gallery />
          <Footer />
        </div>
      </>
    );
  }
}

export default portfolio;
