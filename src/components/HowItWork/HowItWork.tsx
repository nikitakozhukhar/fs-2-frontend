import "./HowItWork.css";
import railwaysImage from "../../img/railways.png";
import Computer from "../../img/svg/computer.svg?react";
import House from "../../img/svg/house.svg?react";
import Planet from "../../img/svg/planet.svg?react";

const HowItWork = () => {
  return (
    <section id="howItWorks" className="relative flex justify-center mb-16">
      <div className="relative top-0 left-0 rigth-0 w-[100vw] h-[575px]">
        
        <img src={railwaysImage} alt="railwaysImage" className="absolute w-[100vw]  h-[575px] bg-cover bg-center bg-no-repeat -z-20"/>

        <div className="absolute w-[100vw]  h-[575px] bg-[#ffa600] opacity-50 -z-20"></div>
      </div>
      <div className="container absolute top-0 flex justify-between items-center py-16 px-5 my-0 mx-auto">
        <div className="text-4xl text-white">Как это работает</div>
        <button className="py-4 px-24 border border-white text-2xl text-white cursor-pointer">
          Узнать больше
        </button>
      </div>

      <div className="container absolute top-[25%] flex justify-around py-[60px] w-full mx-auto">
        <div className="w-[162px]">
          <Computer />
          <div className="text-center text-white">Удобный заказ на сайте</div>
        </div>
        <div className="w-[162px]">
          <House />
          <div className="text-center text-white">Нет необходимости ехать в офис</div>
        </div>
        <div className="w-[162px]">
           <Planet />
          <div className="text-center text-white">Огромный выбор направлений</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
