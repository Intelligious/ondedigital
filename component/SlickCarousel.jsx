import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

const SlickCarousel = ({ carouselRef, children, list, ...rest }) => {
  /* <<--------------------------------------------------------->> */

  /* <<--------------------------------------------------------->> */
  return (
    <Slider
      // dots={true}
      ref={carouselRef}
      speed={500}
      slidesToShow={3}
      slidesToScroll={3}
      // autoplay
      {...rest}
    >
      {children}
    </Slider>
  );
};

export default SlickCarousel;
