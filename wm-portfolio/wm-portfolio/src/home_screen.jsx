import React, { useState, useEffect } from 'react';
import Header from './header';
import Banner from './banner';
import Drawer from './drawer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './homescreen_style.css'; // Import the CSS file



const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [settings, setSettings] = useState({
    dots: true,
    arrows: window.innerWidth ,
    infinite: true,
    speed: 250,
    slidesToShow: window.innerWidth >= 676 ? 3 : 4,
    slidesToScroll: 1,
    vertical: window.innerWidth < 676,
    swipe: true,
    swipeToSlide: true,
  });

  useEffect(() => {
    console.log('Rendered');
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 676;
      setSettings(prevSettings => ({
        ...prevSettings,
        vertical: isSmallScreen,
        arrows: !isSmallScreen,
        slidesToShow: isSmallScreen ? 4 : 3,
        infinite: true, // Ensure infinite scrolling is always enabled
      }));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="background">
      <Header />
      <Banner settings={settings} />
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
};

export default MyComponent;
