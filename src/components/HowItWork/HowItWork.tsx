import "./HowItWork.css";


const HowItWork = () => {
 
  return (
    <>
      <div className="info-container">
        <div className="info-img"></div>
        <div className="col-1 row">
          <div className="info-title">Как это работает</div>
          <button className="learn-more">Узнать больше</button>
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
