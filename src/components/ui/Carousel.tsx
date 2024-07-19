import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ elements }) => {
  const [deviceType, setDeviceType] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 768;
      setDeviceType(window.innerWidth < mobileBreakpoint ? 1 : 0);
    };

    // Ejecutar en el montaje y en cada cambio de tamaño
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Número de elementos visibles a la vez
    slidesToScroll: 2,
    arrows: deviceType ? false : true,
  };

  return (
    <div className="w-full max-w-screen-md mx-auto mt-10">
      <Slider {...settings}>{elements.map((element) => "...")}</Slider>
    </div>
  );
};

export default Carousel;
