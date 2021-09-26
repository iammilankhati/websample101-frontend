import React, { Component } from "react";
import Footer from "../Home/Footer";
import banner1 from "../../Assets/img/1.jpg";
import ScrollToTop from "../scrollToTop/Index";

class pricing extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <div className="pricing">
          <div className="pricing__banner">
            <img src={banner1} alt="banner" />
            <p>Pricing</p>
          </div>

          <div className="pricing__info">
            <h2 className="pricing__info--title">Best Pricing</h2>
            <div className="pricing__info--paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam eos eaque nobis, accusantium ut esse molestiae dolor
              eligendi voluptas commodi at corporis officiis omnis impedit nam
              aperiam. Necessitatibus, facilis.
            </div>
          </div>
          <div className="pricing__plans">
            <div className="pricing__plan">
              <h2>Basic</h2>
              <h3>$15.00/Year</h3>
              <ul>
                <li>Responsive Design</li>
                <li>Bootstrap Design</li>
                <li>Unlimited Support</li>
                <li>Free Trial Version</li>
                <li>HTMLCSS3JQUERY</li>
              </ul>
              <button>Get Now</button>
            </div>
            <div className="pricing__plan">
              <h2>Standard</h2>
              <h3>$20.00/Year</h3>
              <ul>
                <li>Responsive Design</li>
                <li>Bootstrap Design</li>
                <li>Unlimited Support</li>
                <li>Free Trial Version</li>
                <li>HTMLCSS3JQUERY</li>
              </ul>
              <button>Get Now</button>
            </div>
            <div className="pricing__plan">
              <h2>Advanced</h2>
              <h3>$15.00/Year</h3>
              <ul>
                <li>Responsive Design</li>
                <li>Bootstrap Design</li>
                <li>Unlimited Support</li>
                <li>Free Trial Version</li>
                <li>HTMLCSS3JQUERY</li>
              </ul>
              <button>Get Now</button>
            </div>
            <div className="pricing__plan">
              <h2>Mighty</h2>
              <h3>$15.00/Year</h3>
              <ul>
                <li>Responsive Design</li>
                <li>Bootstrap Design</li>
                <li>Unlimited Support</li>
                <li>Free Trial Version</li>
                <li>HTMLCSS3JQUERY</li>
              </ul>
              <button>Get Now</button>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default pricing;
