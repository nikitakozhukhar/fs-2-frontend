// import React from 'react';
import "./Header.css";
import Logo from "../Logo/Logo";
import Banner from "../Banner/Banner";
import FindTicket from "../FindTicket/FindTicket";
import HeaderProps from "../../interfaces/HeaderProps";

import { Link } from "react-scroll";

import trainImage from "../../img/bluredTrain.png";
import defaultImage from "../../img/banner.png";
import successImage from "../../img/successPageBanner.png";

const Header: React.FC<HeaderProps> = ({
  location = "default",
  text = "default",
  findForm,
}) => {
  let imgBannerSrc: string = location;

  if (location === "train") {
    imgBannerSrc = trainImage;
  }
  if (location === "default") {
    imgBannerSrc = defaultImage;
  }
  if (location === "success") {
    imgBannerSrc = successImage;
  }

  // const imgBannerSrc = location === "train" ? trainImage : defaultImage;

  return (
    <header id="header" className="h-[985px]">
      <Logo />
      <div className="absolute w-[100vw] h-[95px] left-0 bg-[#292929] -z-10"></div>
      <div className="flex justify-start items-center h-[95px] max-w-[1440px] m-auto">
        <nav className="">
          <ul className="flex gap-[100px] text-white text-2xl">
            <li className="font-extralight cursor-pointer">
              <Link to="about" smooth={true} duration={500}>
                О нас
              </Link>
            </li>

            <li className="font-extralight cursor-pointer">
              <Link to="howItWorks" smooth={true} duration={500}>
                Как это работает
              </Link>
            </li>
            <li className="font-extralight cursor-pointer">
              <Link to="review" smooth={true} duration={500}>
                Отзывы
              </Link>
            </li>
            <li className="font-extralight cursor-pointer">
              <Link to="footer" smooth={true} duration={500}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-col1">
        {text && (
          <div className="text-container">
            <h2 className="header-text">Вся жизнь -</h2>
            <h2 className="header-text-second">путешествие!</h2>
          </div>
        )}

        {!findForm && <FindTicket />}
      </div>

      <Banner src={imgBannerSrc} />
    </header>
  );
};

export default Header;
