import "./Review.css";

const Review = () => {
  return (
    <div className="review">
      <div className="review-container">
        <div className="review-title"></div>
        <div className="review-posts">
          <div className="review-posts-row">
            <div className="review-post review-post-row">
              <div className="review-post-image">
                <img src="src/img/girl.png" alt="girl" />
              </div>
              <div className="review-post-text review-post-text-col">
                <div className="review-post-text-author">
                  Екатерина Вальнова
                </div>
                <p className="review-text">
                  <blockquote>
                    Доброжелательные подсказки на всех этапах помогут правильно
                    заполнить поля и без затруднений купить авиа или ж/д билет,
                    даже если вы заказываете онлайн билет впервые.
                  </blockquote>
                </p>
              </div>
              <div className="review-post-image">
                <img src="src/img/man.png" alt="man" />
              </div>
              <div className="review-post-text review-post-text-col">
                <div className="review-post-text-author">Евгений Стрыкало</div>
                <p className="review-text">
                  <blockquote>
                    СМС-сопровождение до посадки Сразу после оплаты ж/д билетов
                    и за 3 часа до отправления мы пришлем вам СМС-напоминание о
                    поездке.
                  </blockquote>
                </p>
              </div>
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
    </div>
  );
};

export default Review;
