
import Logo from "../Logo/Logo";
import Banner from "../Banner/Banner";
import FindTicket from "../FindTicket/FindTicket";
import HeaderProps from "../../interfaces/HeaderProps";

import { Link } from "react-scroll";

import trainImage from "../../img/bluredTrain.png";
import defaultImage from "../../img/banner.png";
import successImage from "../../img/successPageBanner.png";

import { progressStore } from "../../store/progressStore";
import ProgressLoadingBar from "../ProgressLoadingBar/ProgressLoadingBar";

const Header: React.FC<HeaderProps> = ({
  location = "default",
  text = "default",
  findForm,
}) => {

  const { progress } = progressStore();

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

  return (
    <header id="header" className="h-[985px]">
      <Logo />
      <div className="absolute w-full h-[95px] left-0 bg-[#292929] z-10 md:h-[75px]"></div>
      <div className="flex justify-start items-center h-[95px] max-w-[1440px] m-auto md:h-[75px]">
        <nav className="flex md:text-xs md:gap-4">
          <ul className="relative z-20 flex gap-[100px] text-white text-2xl">
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

      <div className="flex justify-center items-center mt-[247px] ml-[150px]">
        {text && (
          <div className="flex flex-col items-start 2xl:relative 2xl:-left-[4vw]">
            <h2 className="font-extralight text-6xl text-white">Вся жизнь -</h2>
            <h2 className="font-semibold text-6xl text-white">путешествие!</h2>
          </div>
        )}

        {!findForm && <FindTicket />}
      </div>

      <Banner src={imgBannerSrc} />

      <div className="mt-[26px] w-[100vw] h-[3px]">
        {progress > 0 && progress < 100 && <ProgressLoadingBar/>}
      </div>
    </header>
  );
};

export default Header;
