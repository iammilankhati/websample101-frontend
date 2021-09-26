import React from "react";
import service1 from "../../Assets/img/service1.jpg";
import service2 from "../../Assets/img/service2.jpg";
import service3 from "../../Assets/img/service3.jpg";

const ServicesInfo = () => {
  return (
    <div className="service__box">
      <div className="service__box--info">
        <img src={service1} alt="service" />
        <h2 className="service__box--info--title">Management</h2>
        <div className="service__box--info--paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          eos eaque nobis, accusantium ut esse molestiae dolor eligendi voluptas
          commodi at corporis officiis omnis impedit nam aperiam.
          Necessitatibus, facilis.
        </div>
      </div>
      <div className="service__box--info">
        <img src={service2} alt="service" />
        <h2 className="service__box--info--title">Finance</h2>
        <div className="service__box--info--paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          eos eaque nobis, accusantium ut esse molestiae dolor eligendi voluptas
          commodi at corporis officiis omnis impedit nam aperiam.
          Necessitatibus, facilis.
        </div>
      </div>
      <div className="service__box--info">
        <img src={service3} alt="service" />
        <h2 className="service__box--info--title">Construction</h2>
        <div className="service__info--paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          eos eaque nobis, accusantium ut esse molestiae dolor eligendi voluptas
          commodi at corporis officiis omnis impedit nam aperiam.
          Necessitatibus, facilis.
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
