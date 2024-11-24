import './ProgressPageBar.css'

const ProgressPageBar = () => {
  return (
    <div className="progress-bar-container">
      <div className="prodgress-bar progress-bar-el">
          <div className="progress-bar-count">1</div>
          <div className="progress-bar-title">Билеты</div>
          <span className='righgt-arrow'></span>
      </div>

      <div className="prodgress-bar progress-bar-el">
          <div className="progress-bar-count">2</div>
          <div className="progress-bar-title">Пассажиры</div>
          <span className='righgt-arrow'></span>
      </div>

      <div className="prodgress-bar progress-bar-el">
          <div className="progress-bar-count">3</div>
          <div className="progress-bar-title">Оплата</div>
          <span className='righgt-arrow'></span>
      </div>

      <div className="prodgress-bar progress-bar-el">
          <div className="progress-bar-count">4</div>
          <div className="progress-bar-title">Проверка</div>
          <span className='righgt-arrow'></span>
      </div>
    </div>
  
  );
};

export default ProgressPageBar;