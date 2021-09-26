import React, { Component } from "react";
import girl from "../../Assets/img/img1.png";

export class OurTeam extends Component {
  render() {
    return (
      <div className="team">
        <div className="our-team">
          <img src={girl} alt="our team" />
          <div className="our-team__info">
            <h1 className="our-team__info--title">Our Team</h1>
            <p className="our-team__info--paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              possimus nam! Consequatur autem cumque possimus perspiciatis vel
              aspernatur eos error. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est, cupiditate! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Fugit quasi ipsum sunt perspiciatis
              provident animi praesentium distinctio. Voluptas, quia quos!
            </p>
            <p className="our-team__info--paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              possimus nam! Consequatur autem cumque possimus perspiciatis vel
              aspernatur eos error. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est, cupiditate!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
