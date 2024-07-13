// Banner.jsx
import React from 'react';
import 'slick-carousel/slick/slick.css'; // Import React Slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import React Slick theme styles
import StyledBanner from './styled_banner';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import React Slick library

import AIM from "./assets/AIM1.png";
import voip1 from "./assets/voip1.jpg";
import app2 from "./assets/app12.jpg";
import software1 from "./assets/software12.jpg";

const Banner = ({ settings }) => {
  const navigate = useNavigate();

  return (
    <StyledBanner id='home'>
      <div className="banner-heading">
        <h2>Transforming Businesses</h2>
      </div>
      <Slider {...settings}>
        <div>
          <img src={AIM} alt="AI Slide" onError={(e) => e.target.src = '/assets/fallback.png'} />
          <button className="image-overlay-button" aria-label="Navigate to AI" onClick={() => navigate("/ai")}>Learn More</button>
        </div>
        <div>
          <img src={voip1} alt="VOIP Slide" onError={(e) => e.target.src = '/assets/fallback.png'} />
          <button className="image-overlay-button" aria-label="Navigate to VOIP" onClick={() => navigate("/voip")}>Learn More</button>
        </div>
        <div>
          <img src={app2} alt="Mobile App Development Slide" onError={(e) => e.target.src = '/assets/fallback.png'} />
          <button className="image-overlay-button" aria-label="Navigate to Mobile App Development" onClick={() => navigate("/mobile")}>Learn More</button>
        </div>
        <div>
          <img src={software1} alt="Software Development Slide" onError={(e) => e.target.src = '/assets/fallback.png'} />
          <button className="image-overlay-button" aria-label="Navigate to Software Development" onClick={() => navigate("/software")}>Learn More</button>
        </div>
      </Slider>
    </StyledBanner>
  );
};

export default Banner;
