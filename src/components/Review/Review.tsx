import "./Review.css";
import manImage from "../../img/man.png";
import girlImage from "../../img/girl.png";

const Review = () => {

  return (
    <section id="review" className="review">
      <div className="review-container">
        <div className="review-title"></div>
        <div className="review-posts">
          <div className="review-post">
            <div className="review-post-image">
              <img src={girlImage} alt="girl" />
            </div>
            <div className="review-post-text review-post-text-col">
              <div className="review-post-text-author">Екатерина Вальнова</div>
              <p className="review-text">
                <blockquote>
                  Доброжелательные подсказки на всех этапах помогут правильно
                  заполнить поля и без затруднений купить авиа или ж/д билет,
                  даже если вы заказываете онлайн билет впервые.
                </blockquote>
              </p>
            </div>
          </div>

          <div className="review-post">
            <div className="review-post-image">
              <img src={manImage} alt="man" />
            </div>
            <div className="review-post-text review-post-text-col">
              <div className="review-post-text-author">Евгений Стрыкало</div>
              <p className="review-text">
                <blockquote>
                  СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и
                  за 3 часа до отправления мы пришлем вам СМС-напоминание о
                  поездке.
                </blockquote>
              </p>
            </div>
          </div>
        </div>
        <div className="review-dots-control">
          <span className="dot dot-active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Review;
