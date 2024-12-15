import "./Footer.css";
import PhoneIcon from "../../img/svg/phone.svg?react"
import EmailIcon from "../../img/svg/mail.svg?react"
import SkypeIcon from "../../img/svg/skype.svg?react"
import LocationIcon from "../../img/svg/location.svg?react"
import YotubeIcon from "../../img/svg/youtube.svg?react"
import InIcon from "../../img/svg/in.svg?react"
import GooglePlusIcon from "../../img/svg/googlePlus.svg?react"
import FacabookIcon from "../../img/svg/facebook.svg?react"
import TweeterIcon from "../../img/svg/tweetter.svg?react"
import ArrowUpIcon from "../../img/svg/arrowUp.svg?react"
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-left">
              <div className="footer-contacts">
                <h4 className="contacts-title">Свяжитесь с нами</h4>
                <div className="contact-line">
                  <div className="contact-icon">
                    <PhoneIcon />
                  </div>
                  <div className="contact-info">8 (800) 000 00 00</div>
                </div>
                <div className="contact-line">
                  <div className="contact-icon">
                    <EmailIcon />
                  </div>
                  <div className="contact-info">inbox@mail.ru</div>
                </div>
                <div className="contact-line">
                  <div className="contact-icon">
                    <SkypeIcon />
                  </div>
                  <div className="contact-info">tu.train.ticket</div>
                </div>
                <div className="contact-line">
                  <div className="contact-icon">
                    <LocationIcon />
                  </div>
                  <div className="contact-info">
                    г. Москва, ул. Московская 27-35 555 555
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-subscribe-form">
                <h4 className="contacts-title">Подписка</h4>
                <form className="form">
                  <div className="form-title">Будте в курсе событий</div>
                  <div className="input-row">
                    <input type="text" className="input-subscribe" />
                    <button className="btn-send">Отправить</button>
                  </div>
                </form>
              </div>
              <div className="footer-socials">
                <h4 className="contacts-title">Подписывайтесь на нас</h4>
                <ul className="footer-socials-list">
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
          <div className="footer-bottom">
            <div className="logo logo-footer">
              <Logo />
            </div>

            <div className="arrowUp">
              <Link to="header" smooth={true} duration={500}>
                <ArrowUpIcon />
              </Link>
            </div>
            <div className="bottom-date">2025 WEB</div>
          </div>
        </div>
      </div>
      <div className="bottom-line"></div>
    </footer>
  );
};

export default Footer;
