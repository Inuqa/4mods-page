import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

const Slider = ({slides, showCurrent}) => {
  console.log(showCurrent);

  let showCurrentSlice = false;

  if (!showCurrent) {
    showCurrentSlice = true;
    console.log(showCurrentSlice)
  }

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={showCurrentSlice}
      showArrows={false}
    >
      {slides}
    </Carousel>
  );
};

export default Slider;
