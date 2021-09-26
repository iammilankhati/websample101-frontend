import React, { Component } from "react";
import banner1 from "../../Assets/img/1.jpg";
import Footer from "../Home/Footer";
import ScrollToTop from "../scrollToTop/Index";
export class contact extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <div className="contact">
          <div className="contact__banner">
            <img src={banner1} alt="banner" />
            <p>Contact Us</p>
          </div>

          <div className="contact__info">
            <h2 className="contact__info--title">Get In Touch</h2>
            <div className="contact__info--paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam eos eaque nobis, accusantium ut esse molestiae dolor
              eligendi voluptas commodi at corporis officiis omnis impedit nam
              aperiam. Necessitatibus, facilis.
            </div>
          </div>

          <form action="">
            <h2>Contact me</h2>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
            />
            <input type="email" name="email" id="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>

            <button>Send</button>
          </form>

          <Footer />
        </div>
      </>
    );
  }
}

export default contact;
