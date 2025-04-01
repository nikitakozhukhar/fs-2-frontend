import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderStore from "../../store/orderStore";
import { useOrderData } from "../../utils/useOrderQuery";
import { choosenRoute } from "../../../src/store/choosenRoute";
import ConfirmationDetailCard from "../ConfirmationDetailCard/ConfirmationDetailCard";
import PassangerIcon from "../../img/svg/passanger.svg?react";

const Confirmation = () => {
  const { user, departure } = orderStore();
  const { routeInfo } = choosenRoute();
  const { seats } = departure;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { mutateAsync: createOrder } = useOrderData();

  const totalPrice = seats.reduce((sum, seat) => sum + (seat.price || 0), 0);
  const confirmData = { user, departure };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await createOrder(confirmData);
      console.log("Order creation result:", result);
      navigate("/success");
    } catch (err) {
      setError("Не удалось подтвердить заказ. Пожалуйста, попробуйте еще раз.");
      console.error("Order confirmation error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-[960px] mb-14">
      <div className="border-2 border-[#C4C4C4]">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="text-2xl font-medium">Поезд</div>
        </div>
        <ConfirmationDetailCard routeInfo={routeInfo} />
      </div>

      <div className="flex flex-col w-[960px]">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9] border-2 border-[#C4C4C4]">
          <div className="text-2xl font-medium">Пассажиры</div>
        </div>

        <div className="py-8 px-5 border-2 border-[#C4C4C4]">
          <div className="flex flex-col gap-8">
            {seats.map((seat) => (
              <div className="flex gap-5">
                <div className="flex flex-col justify-center items-center gap-2">
                  <PassangerIcon />
                  <div className="">
                    {seat.personInfo?.isAdult ? "Взрослый" : "Детский"}
                  </div>
                </div>
                <div className="flex flex-col gap-2 ml-2 text-xl">
                  <div className="font-semibold">
                    {`
                    ${seat.personInfo?.lastName}
                    ${seat.personInfo?.firstName}
                    ${seat.personInfo?.patronymic}`}
                  </div>
                  <div className="text-[#928F94]">
                    Пол {seat.personInfo?.gender ? "Мужской" : "Женский"}
                  </div>
                  <div className="text-[#928F94]">
                    Дата рождения {seat.personInfo?.birthday}
                  </div>
                  <div className="text-[#928F94]">
                    {seat.personInfo?.documentType === "passport"
                      ? `Пасспорт РФ ${seat.personInfo.documentData}`
                      : `Свидетельство о роождении ${seat.personInfo?.documentData}`}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex self-end">
              <span className="text-xl mr-5">Всего</span>
              <span className="text-xl font-bold">{totalPrice}</span>
              <span className="text-xl after:content-['\20BD'] after:text-[#928F94]"></span>
            </div>
            <Link className="self-end" to={"/passangers"}>
              <button className=" py-2 px-8 border-2 border-[#292929] rounded-md font-bold text-lg">
                Изменить
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[960px] mb-5  border-2 border-[#C4C4C4]">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9] border-b-2 border-[#C4C4C4]">
          <div className="text-2xl font-medium">Способ оплаты</div>
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div className="px-5 text-xl">
            {user.paymentMethod === "online" ? "Онлайн" : "Наличными"}
          </div>
          <Link className="self-end" to={"/payment"}>
            <button className="py-2 px-8 border-2 border-[#292929] rounded-md font-bold text-lg">
              Изменить
            </button>
          </Link>
        </div>
      </div>

      {/* <Link className="self-end" to={"/success"}> */}
        <button
          onClick={handleConfirm}
          disabled={isSubmitting}
          className={`w-[323px] h-[60px] bg-[#FFA800] rounded-md text-2xl font-bold text-white uppercase hover:shadow-md hover:shadow-[#bebcbe] active:bg-white active:text-[#FFA800] active:border active:border-[#FFA800]${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Отправка..." : "Подтвердить"}
        </button>

        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
      {/* </Link> */}
    </div>
  );
};

export default Confirmation;
