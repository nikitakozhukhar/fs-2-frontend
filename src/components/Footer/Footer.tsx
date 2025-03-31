import { useState } from "react";
import { Link } from "react-scroll";
import { useSubscribeQuery } from "../../utils/useSubscribeQuery";
import Logo from "../Logo/Logo";

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

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const { refetch } = useSubscribeQuery(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Пожалуйста, введите email');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Пожалуйста, введите корректный email');
      return;
    }

    try {
      const { data } = await refetch();
      
      if (data) {
        setSubmitted(true);
        setEmail('');
        setError('');
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      setError('Произошла ошибка при подписке. Пожалуйста, попробуйте позже.');
    }
  };

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
                <form className="form" onSubmit={handleSubmit}>
                  <div className="mb-4 text-2xl">Будьте в курсе событий</div>
                  <div className="flex gap-8 mb-2">
                    <input 
                      type="email"
                      id="subscribe"
                      name="subscribe"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Введите ваш email"
                      className="w-[450px] h-14 text-xl outline-none px-4 text-black" 
                    />
                    <button 
                      type="submit"
                      className="w-[170px] h-14 border border-white uppercase hover:bg-white hover:text-[#2d2b30] transition-colors duration-300"
                      disabled={submitted}
                    >
                      {submitted ? 'Отправлено!' : 'Отправить'}
                    </button>
                  </div>
                  {error && <div className="text-red-500 text-lg">{error}</div>}
                  {submitted && <div className="text-green-500 text-lg">Спасибо за подписку!</div>}
                </form>
              </div>
              <div className="footer-socials">
                <h4 className="contacts-title text-3xl mb-3">Подписывайтесь на нас</h4>
                <ul className="flex gap-10">
                  <li className="hover:scale-110 transition-transform duration-300">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                      <YotubeIcon className="hover:text-[#FFA800]"/>
                    </a>
                  </li>
                  <li className="hover:scale-110 transition-transform duration-300">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <InIcon className="hover:text-[#FFA800]"/>
                    </a>
                  </li>
                  <li className="hover:scale-110 transition-transform duration-300">
                    <a href="https://www.googleplus.com" target="_blank" rel="noopener noreferrer">
                      <GooglePlusIcon className="hover:text-[#FFA800]"/>
                    </a>
                  </li>
                  <li className="hover:scale-110 transition-transform duration-300">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <FacabookIcon className="hover:text-[#FFA800]"/>
                    </a>
                  </li>
                  <li className="hover:scale-110 transition-transform duration-300">
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                      <TweeterIcon className="hover:text-[#FFA800]"/>
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

            <div className="cursor-pointer text-[#E5E5E5] hover:text-[#FFA800] transition-colors duration-300">
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