import { Link } from "react-router-dom";
import EmailSendIcon from "../../img/svg/emailSend.svg?react";
import TicketIcon from "../../img/svg/printTicket.svg?react";
import CheckConductor from "../../img/svg/checkConductor.svg?react";
import Star from "../../img/svg/Star.svg?react";

import orderStore from "../../store/orderStore";



const SuccessInfoBanner = () => {

  const { user } = orderStore();

  // const handleClick = (item) => {
  //   console.log(item)
  // }

  const starsArr = [
    <div className="hover:text-white cursor-pointer"><Star key={1} /></div>,
    <div className="hover:text-white cursor-pointer"><Star key={2} /></div>,
    <div className="hover:text-white cursor-pointer"><Star key={3} /></div>,
    <div className="hover:text-white cursor-pointer"><Star key={4} /></div>,
    <div className="hover:text-white cursor-pointer"><Star key={5} /></div>
  ]
 

  // const renderStars = () => {
  //   const stars = [];

  //   for (let i = 0; i <= 4; i++) {
  //     stars.push(<div className="hover:text-white cursor-pointer"><Star key={i} /></div>);
  //   }
  //   return stars;
  // };

  return (
    <div className="flex flex-col flex-grow w-[1400px] mx-auto relative -top-52">
      <h1 className="text-7xl font-bold text-white mb-5">
        Благодарим Вас за заказ!
      </h1>
      <div className="bg-white border-2 border-[#C4C4C4]">
        <div className="flex p-8 justify-between border-b-2 border-[#C4C4C4]">
          <div className="font-bold text-4xl">№ Заказа 285АА</div>
          <div className="flex items-center text-4xl">
            <span className="mr-5 text-4xl text-[#928F94]">Сумма</span>
            <span className="font-bold mr-2">7 760</span>
            <span className="after:content-['\20BD'] after:text-[#928F94]"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-14 w-[1100px] mx-auto">
          <div className="flex justify-center items-center gap-11">
            <div className="flex flex-col items-center">
              <div className="text-[#ffc655]">
                <EmailSendIcon />
              </div>
              <div className="w-[120px] text-center text-lg">
                билеты будут отправлены на ваш e-mail
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#ffc655]">
                <TicketIcon />
              </div>
              <div className="w-[195px] text-center text-lg">
                распечатайте и сохраняйте билеты до даты поездки
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#ffc655]">
                <CheckConductor />
              </div>
              <div className="w-[205px] text-center text-lg">
                предьявите распечатанные билеты при посадке
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start self-start mb-44">
            <h2 className="mb-5 text-4xl font-bold">{`${user.firstName} ${user.patronymic}`}!</h2>
            <p className="text-2xl">Ваш заказ успешно оформлен.</p>
            <p className="mb-8 text-2xl">
              В ближайшее время с вами свяжется наш оператор для подтверждения.
            </p>
            <p className="font-bold text-2xl">
              Благодарим Вас за оказанное доверие и желаем приятного
              путешествия!
            </p>
          </div>
        </div>
        <div className="flex justify-between p-8 bg-[#ffb31f]">
          <div className="flex items-center gap-5 text-2xl">
            Оценить сервис
            {starsArr.map(star => (
              star
            ))}
          </div>

          <Link to={"/"}>
            <button className="border-2 border-black px-4 py-2 rounded-lg text-2xl font-bold">
              вернуться на главную
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessInfoBanner;
