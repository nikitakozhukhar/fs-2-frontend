import { Link } from "react-router-dom";
import orderStore from "../../store/orderStore";

import ConfirmationDetailCard from '../ConfirmationDetailCard/ConfirmationDetailCard';

import { choosenRoute } from "../../../src/store/choosenRoute";


const Confirmation = () => {
  const { user } = orderStore();

  const { routeInfo } = choosenRoute();

  return (
    <div className="flex flex-col gap-8 w-[960px] mb-14">
      <div className="border-2 border-[#C4C4C4]">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="text-2xl font-medium">Поезд</div>
        </div>

        <ConfirmationDetailCard routeInfo={routeInfo}/>
        
      </div>

      <div className="flex flex-col w-[960px]">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9] border-2 border-[#C4C4C4]">
          <div className="text-2xl font-medium">Пассажиры</div>
        </div>
        <div className="py-8 px-5 border-2 border-[#C4C4C4]">
          <div className="flex flex-col gap-8">
            <div className="flex gap-5">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-[50px] h-[50px] bg-orange-500 rounded-full"></div>
                <div className="">Тариф</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-semibold">Мартынюк Ирина Эдуардовна</div>
                <div className="text-[#928F94]">пол женский</div>
                <div className="text-[#928F94]">дата рождения</div>
                <div className="text-[#928F94]">Документ</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-[50px] h-[50px] bg-orange-500 rounded-full"></div>
                <div className="">Тариф</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-semibold">Мартынюк Кирилл Сергеевич</div>
                <div className="text-[#928F94]">пол мужской</div>
                <div className="text-[#928F94]">дата рождения</div>
                <div className="text-[#928F94]">Документ</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between">
              <div className="flex gap-5 ">
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="w-[50px] h-[50px] bg-orange-500 rounded-full"></div>
                  <div className="">Тариф</div>
                </div>
                <div className="flex flex-col ">
                  <div className="font-semibold">Мартынюк Сергей Петрович</div>
                  <div className="text-[#928F94]">пол мужской</div>
                  <div className="text-[#928F94]">дата рождения</div>
                  <div className="text-[#928F94]">Документ</div>
                </div>
              </div>
              <div className="flex self-end">
                <span className="text-xl mr-5">Всего</span>
                <span className="text-xl font-bold">7 760</span>
                <span className="text-xl after:content-['\20BD'] after:text-[#928F94]"></span>
              </div>
            </div>
            <button className="self-end py-2 px-8 border-2 border-[#292929] rounded-md font-bold text-lg">
              Изменить
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>

      <div className="flex flex-col w-[960px] mb-5  border-2 border-[#C4C4C4]">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9] border-b-2 border-[#C4C4C4]">
          <div className="text-2xl font-medium">Пассажиры</div>
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div className="">Наличными</div>
          <button className="self-end py-2 px-8 border-2 border-[#292929] rounded-md font-bold text-lg">
            Изменить
          </button>
        </div>
      </div>

      <Link className="self-end" to={"/success"}>
        <button className="w-[323px] h-[60px] bg-[#FFA800] rounded-md text-2xl font-bold text-white uppercase">
          Подтвердить{" "}
        </button>
      </Link>
    </div>
  );
};

export default Confirmation;
