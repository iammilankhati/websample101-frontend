import React, { Component } from "react";
import banner1 from "../../Assets/img/1.jpg";
import Footer from "../Home/Footer";
import ScrollToTop from "../scrollToTop/Index";
import OurServices from "./OurServices";
import ServicesInfo from "./ServicesInfo";

export class Service extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <div className="service">
          <div className="service__banner">
            <img src={banner1} alt="banner" />
            <p>Services</p>
          </div>

          <div className="service__info">
            <h2 className="service__info--title">Our Quality Service</h2>
            <div className="service__info--paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam eos eaque nobis, accusantium ut esse molestiae dolor
              eligendi voluptas commodi at corporis officiis omnis impedit nam
              aperiam. Necessitatibus, facilis.
            </div>
          </div>
          <ServicesInfo />
          <hr class="line" />
          <OurServices />

          <Footer />
        </div>
      </>
    );
  }
}

export default Service;
