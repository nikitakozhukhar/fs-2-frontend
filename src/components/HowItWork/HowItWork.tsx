import "./HowItWork.css";
import Icon from "../Icon/Icon";


const HowItWork = () => {
 
  return (
    <>
      <div className="info-container">
        <div className="image"></div>
        <div className="image-mask"></div>
        <div className="col-1 row">
          <div className="info-title"></div>
          <button className="learn-more"></button>
        </div>
        <div className="col-2">
          <div className="col-2_item">
            <div className="item-img"></div>
            <div className="item-text">Удобный заказ на сайте</div>
          </div>
          <div className="col-2_item">
            <div className="item-img"></div>
            <div className="item-text">Нет необходимости ехать в офис</div>
          </div>
          <div className="col-2_item">
            <div className="item-img"></div>
            <div className="item-text">Огромный выбор направлений</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
