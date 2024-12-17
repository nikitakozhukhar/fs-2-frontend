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
    <footer id="footer" className="w-[100vw] bg-[#2d2b30]">
      <div className="max-w-[1440px] mx-auto my-0">
        <div className="flex flex-col">
          <div className="flex justify-between mb-12">
            <div className="footer-left">
              <div className="flex flex-col gap-5 text-white">
                <h4 className="text-xl">Свяжитесь с нами</h4>
                <div className="flex items-center text-xl gap-5">
                  <PhoneIcon />
                  <div className="contact-info">8 (800) 000 00 00</div>
                </div>
                <div className="flex items-center text-xl gap-5">
                  <EmailIcon />
                  <div className="contact-info">inbox@mail.ru</div>
                </div>
                <div className="flex items-center text-xl gap-5">
                  <SkypeIcon />
                  <div className="contact-info">tu.train.ticket</div>
                </div>
                <div className="flex items-center text-xl gap-5">
                  <LocationIcon />
                  <div>
                    г. Москва, ул. Московская 27-35 555 555
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl text-white">
              <div className="footer-subscribe-form">
                <h4 className="contacts-title">Подписка</h4>
                <form className="form">
                  <div className="mb-4">Будте в курсе событий</div>
                  <div className="flex gap-8">
                    <input type="text" className="w-[450px] h-14 text-xl outline-none" />
                    <button className="w-[170px] h-14 border border-white uppercase">Отправить</button>
                  </div>
                </form>
              </div>
              <div className="footer-socials">
                <h4 className="contacts-title">Подписывайтесь на нас</h4>
                <ul className="flex gap-5">
                  <li className="socials-list-item">
                    <a href="" className="socials-list-link">
                      <YotubeIcon />
                    </a>
                  </li>
                  <li className="socials-list-item">
                    <a href="" className="socials-list-link">
                      <InIcon />
                    </a>
                  </li>
                  <li className="socials-list-item">
                    <a href="" className="socials-list-link">
                      <GooglePlusIcon />
                    </a>
                  </li>
                  <li className="socials-list-item">
                    <a href="" className="socials-list-link">
                      <FacabookIcon />
                    </a>
                  </li>
                  <li className="socials-list-item">
                    <a href="" className="socials-list-link">
                      <TweeterIcon />
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
            <div className="text-white">2025 WEB</div>
          </div>
        </div>
      </div>
      <div className="relative w-[100vw] h-[1px] bottom-[78px] bg-white"></div>
    </footer>
  );
};

export default Footer;
