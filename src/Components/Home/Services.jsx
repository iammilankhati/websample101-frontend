import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Services extends Component {
  render() {
    return (
      <div className="services ">
        <div className="services__main">
          <h1 className="services__main--title">Services</h1>
          <p className="services__main--paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            molestiae dolor velit, aliquid neque similique dolorum veritatis eos
            eligendi laudantium? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Repellendus veniam odio laboriosam animi officia
            sed molestiae, labore sit consequuntur veritatis? Nesciunt, nostrum?
            Porro vel eum nesciunt error mollitia exercitationem laboriosam.
          </p>
        </div>
        <div className="services__items">
          <div className="services__item">
            <FontAwesomeIcon icon={["fas", "cog"]} size="4x" className="icon" />
            <h2 className="services__item--title">IT Strategy</h2>
            <p className="services__item--paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quos exercitationem. Quasi quibusdam provident ab, eum minima vel
              excepturi rror repreenderit qui. Unde deserunt
            </p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="services__item">
            <FontAwesomeIcon
              icon={["fas", "sign-in-alt"]}
              size="4x"
              className="icon"
            />
            <h2 className="services__item--title">Products</h2>
            <p className="services__item--paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quos exercitationem. Quasi quibusdam provident ab, eum minima vel
              excepturi rror repreenderit qui. Unde deserunt
            </p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="services__item">
            <FontAwesomeIcon
              icon={["fas", "user"]}
              size="4x"
              className="icon"
            />
            <h2 className="services__item--title">Development</h2>
            <p className="services__item--paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quos exercitationem. Quasi quibusdam provident ab, eum minima vel
              excepturi rror repreenderit qui. Unde deserunt
            </p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="services__item">
            <FontAwesomeIcon
              icon={["fas", "home"]}
              size="4x"
              className="icon"
            />
            <h2 className="services__item--title">Quality</h2>
            <p className="services__item--paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quos exercitationem. Quasi quibusdam provident ab, eum minima vel
              excepturi rror repreenderit qui. Unde deserunt
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
