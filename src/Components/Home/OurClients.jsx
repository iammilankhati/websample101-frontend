import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

import natural from "../../Assets/img/natural.png";
import google from "../../Assets/img/google.png";
import shell from "../../Assets/img/shell.png";
import cityairline from "../../Assets/img/cityairline.png";
import amazon from "../../Assets/img/amazon.png";
import cisco from "../../Assets/img/cisco.png";
import dell from "../../Assets/img/dell.png";
import ebay from "../../Assets/img/ebay.png";
import igneus from "../../Assets/img/igneus.png";
import natural_grey from "../../Assets/img/natural_grey.png";
import google_grey from "../../Assets/img/google_grey.png";
import shell_grey from "../../Assets/img/shell_grey.png";
import cityairline_grey from "../../Assets/img/cityairline_grey.png";
import amazon_grey from "../../Assets/img/amazon_grey.png";
import cisco_grey from "../../Assets/img/cisco_grey.png";
import dell_grey from "../../Assets/img/dell_grey.png";
import ebay_grey from "../../Assets/img/ebay_grey.png";
import igneus_grey from "../../Assets/img/igneus_grey.png";
import hp from "../../Assets/img/hp.png";
import hp_grey from "../../Assets/img/hp_grey.png";

export class OurClients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snatural: natural_grey,
      sgoogle: google_grey,
      sshell: shell_grey,
      scityairline: cityairline_grey,
      samazon: amazon_grey,
      scisco: cisco_grey,
      sdell: dell_grey,
      sebay: ebay_grey,
      signeus: igneus_grey,
      shp: hp_grey,
    };
  }
  previous = () => {
    this.slider.slickPrev();
  };

  next = () => {
    this.slider.slickNext();
  };
  render() {
    const settings = {
      //dots: true,
      //infinite: true,
      draggable: true,

      //autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
      ],
    };
    return (
      <div className="our-clients">
        <h2 className="client-title">Our Clients</h2>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div className="slide">
            <img
              src={this.state.sebay}
              alt="ebay"
              onMouseEnter={() => this.setState({ sebay: ebay })}
              onMouseLeave={() => this.setState({ sebay: ebay_grey })}
            />
          </div>
          <div className="slide">
            <img
              src={this.state.snatural}
              alt="natural"
              onMouseEnter={() => this.setState({ snatural: natural })}
              onMouseLeave={() => this.setState({ snatural: natural_grey })}
            />
          </div>
          <div className="slide">
            <img
              src={this.state.sgoogle}
              alt="google"
              onMouseEnter={() => this.setState({ sgoogle: google })}
              onMouseLeave={() => this.setState({ sgoogle: google_grey })}
            />
          </div>
          <div className="slide">
            <img
              src={this.state.signeus}
              alt="igneus"
              onMouseEnter={() => this.setState({ signeus: igneus })}
              onMouseLeave={() => this.setState({ signeus: igneus_grey })}
            />
          </div>
          <div className="slide">
            <img
              src={this.state.sdell}
              alt="dell"
              onMouseEnter={() => this.setState({ sdell: dell })}
              onMouseLeave={() => this.setState({ sdell: dell_grey })}
            />
          </div>
          <div className="slide">
            <img
              src={this.state.scityairline}
              alt="cityairline"
              onMouseEnter={() => this.setState({ scityairline: cityairline })}
              onMouseLeave={() =>
                this.setState({ scityairline: cityairline_grey })
              }
            />
          </div>
          <div className="slide">
            <img
              src={this.state.shp}
              alt="hp"
              onMouseEnter={() => this.setState({ shp: hp })}
              onMouseLeave={() => this.setState({ shp: hp_grey })}
            />
          </div>
          <div className="slide">
            <img
              src={this.state.sshell}
              alt="shell"
              onMouseEnter={() => this.setState({ sshell: shell })}
              onMouseLeave={() => this.setState({ sshell: shell_grey })}
            />
          </div>
          <div className="slide">
            <img
              src={this.state.samazon}
              alt="amazon"
              onMouseEnter={() => this.setState({ samazon: amazon })}
              onMouseLeave={() => this.setState({ samazon: amazon_grey })}
            />
          </div>
          <div className="slide">
            <img
              src={this.state.scisco}
              alt="cisco"
              onMouseEnter={() => this.setState({ scisco: cisco })}
              onMouseLeave={() => this.setState({ scisco: cisco_grey })}
            />
          </div>
        </Slider>
        <div className="arrows">
          <span>
            <FontAwesomeIcon
              icon={["fas", "chevron-left"]}
              onClick={this.previous}
            />{" "}
          </span>
          <span>
            <FontAwesomeIcon
              icon={["fas", "chevron-right"]}
              onClick={this.next}
            />{" "}
          </span>
        </div>
      </div>
    );
  }
}

export default OurClients;
