// import React from 'react';
import "./Header.css";
import Logo from "../Logo/Logo";
import Banner from "../Banner/Banner";
import FindTicket from '../FindTicket/FindTicket'
import HeaderProps from '../../interfaces/HeaderProps'

// import { Link } from 'react-router-dom'

import trainImage from "../../img/bluredTrain.png";
import defaultImage from "../../img/banner.png";
import successImage from "../../img/successPageBanner.png"

const Header:React.FC<HeaderProps> = ( {location = 'default', text = 'default', findForm} ) => {

  let imgBannerSrc:string = location;

  if (location === "train") {
    imgBannerSrc = trainImage
  } 
  if (location === "default"){
    imgBannerSrc = defaultImage
  }
  if (location === "success") {
    imgBannerSrc = successImage
  } 

  // const imgBannerSrc = location === "train" ? trainImage : defaultImage;

  return (
    <header className="header-container">
      <Logo />
      <div className="navbar-mask"></div>
      <div className="header-row">
        <nav className="navbar">
          <ul className="nav-list">
            {/* <Link to={"/#review"}> */}
              <li className="nav-item">О нас</li>
            {/* </Link> */}
            <li className="nav-item">Как это работает</li>
            <li className="nav-item">Отзывы</li>
            <li className="nav-item">Контакты</li>
          </ul>
        </nav>
      </div>
      
        <div className="header-col1">
          {text && ( <div className="text-container">
            <h2 className="header-text">Вся жизнь -</h2>
            <h2 className="header-text-second">путешествие!</h2>
          </div>)}

          {!findForm &&
            <FindTicket />
          }

      </div>
     

      <Banner src={imgBannerSrc}/>
    </header>
  );
};

export default Header;
