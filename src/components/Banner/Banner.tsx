// import React from 'react';
import "./Banner.css";
// import trainImage from "../../img/bluredTrain.png";
// import defaultImage from "../../img/banner.png";

interface BannerProps {
 src: string
}

const Banner: React.FC<BannerProps> = ( {src} ) => {

 
  return (
  
      <div className="banner" style={{backgroundImage:`url(${src})`}}>
          <div className="mask"></div>
      </div>
  
  );
};

export default Banner;
