import "./Footer.css";
import PhoneIcon from "../../img/svg/phone.svg?react";
import EmailIcon from "../../img/svg/mail.svg?react";
import SkypeIcon from "../../img/svg/skype.svg?react";
import LocationIcon from "../../img/svg/location.svg?react";
import YotubeIcon from "../../img/svg/youtube.svg?react";
import InIcon from "../../img/svg/in.svg?react";
import GooglePlusIcon from "../../img/svg/googlePlus.svg?react";
import FacabookIcon from "../../img/svg/facebook.svg?react";
import TweeterIcon from "../../img/svg/tweetter.svg?react";
import ArrowUpIcon from "../../img/svg/arrowUp.svg?react";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer" className="w-full mt-auto bg-[#2d2b30]">
      <div className="container mx-auto my-7">
        <div className="flex flex-col">
          <div className="flex justify-between mb-12">
            <div className="footer-left">
              <div className="flex flex-col gap-5 text-white text-2xl">
                <h4 className="mb-4 text-3xl">Свяжитесь с нами</h4>
                <div className="flex items-center gap-5">
                  <PhoneIcon />
                  <div className="contact-info">8 (800) 000 00 00</div>
                </div>
                <div className="flex items-center gap-5">
                  <EmailIcon />
                  <div className="contact-info">inbox@mail.ru</div>
                </div>
                <div className="flex items-center gap-5">
                  <SkypeIcon />
                  <div className="contact-info">tu.train.ticket</div>
                </div>
                <div className="flex items-center gap-5">
                  <LocationIcon />
                  <div>
                    г. Москва, ул. Московская 27-35 555 555
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl text-white">
              <div className="footer-subscribe-form">
                <h4 className="mb-4 text-3xl">Подписка</h4>
                <form className="form">
                  <div className="mb-4 text-2xl">Будте в курсе событий</div>
                  <div className="flex gap-8 mb-4">
                    <input type="text" className="w-[450px] h-14 text-xl outline-none" />
                    <button className="w-[170px] h-14 border border-white uppercase">Отправить</button>
                  </div>
                </form>
              </div>
              <div className="footer-socials">
                <h4 className="contacts-title text-3xl mb-3">Подписывайтесь на нас</h4>
                <ul className="flex gap-10">
                  <li className="">
                    <a href="https://www.youtube.com" target="blank" className="">
                      <YotubeIcon className="active:text-[#FFA800]"/>
                    </a>
                  </li>
                  <li className="socials-list-item">
                    <a href="#" target="blank" className="socials-list-link">
                      <InIcon className="active:text-[#FFA800]"/>
                    </a>
                  </li>
                  <li className="socials-list-item">
                    <a href="https://www.googleplus.com" target="blank" className="socials-list-link">
                      <GooglePlusIcon className="active:text-[#FFA800]"/>
                    </a>
                  </li>
                  <li className="socials-list-item">
                    <a href="https://www.facebook.com" target="blank" className="socials-list-link">
                      <FacabookIcon className="active:text-[#FFA800]"/>
                    </a>
                  </li>
                  <li className="socials-list-item">
                    <a href="https://www.x.com">
                      <TweeterIcon className="active:text-[#FFA800]"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="mx-0">
              <Logo />
            </div>

            <div className="cursor-pointer text-[#E5E5E5]">
              <Link to="header" smooth={true} duration={500}>
                <ArrowUpIcon />
              </Link>
            </div>
            <div className="text-white text-2xl">2025 WEB</div>
          </div>
        </div>
      </div>
      <div className="relative w-[100vw] h-[1px] bottom-[100px] bg-white"></div>
    </footer>
  );
};

export default Footer;
