import "./HowItWork.css";
import Computer from "../../img/svg/computer.svg?react";
import House from "../../img/svg/house.svg?react";
import Planet from "../../img/svg/planet.svg?react"

const HowItWork = () => {
  return (
    <section id="howItWorks" className="info">
      <div className="info-container">
        <div className="info-img"></div>
        <div className="col-1 row">
          <div className="info-title">Как это работает</div>
          <button className="learn-more">Узнать больше</button>
        </div>
        <div className="col-2 col-2-container">
          <div className="col-2_item">
            <div className="item-img">
              <Computer />
            </div>
            <div className="item-text">Удобный заказ на сайте</div>
          </div>
          <div className="col-2_item">
            <div className="item-img">
              <House />
            </div>
            <div className="item-text">Нет необходимости ехать в офис</div>
          </div>
          <div className="col-2_item">
            <div className="item-img">
              <Planet />
            </div>
            <div className="item-text">Огромный выбор направлений</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
