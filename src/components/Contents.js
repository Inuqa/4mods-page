import React from 'react';
import Slider from './Carousel';
import data from '../data.json';

const services = ['Armados', 'Mods', 'Mantencion'];

const Contents = () => {
  const [selectedSlides, setSelectedSlides] = React.useState(data.armados);

  const handleService = (e) => {
    if (e.target.value === '1') {
      setSelectedSlides(data.armados);
    } else if (e.target.value === '2') {
      setSelectedSlides(data.mods);
    }
    console.log(e.target.value);
    console.log(selectedSlides);
  };


  const selectService = services.map((service, index) =>
    <div className="service-slides" key={index}>
      <button
        className="service-btn"
        onClick={handleService}
        value={index+1}
      >{service}
      </button>
    </div>);

  const slides = selectedSlides.map((item) =>
    <div key={item.id}>
      <img src={item.img}/>
    </div>);
  console.log(slides);

  return (
    <div className="contents">
      <>
        <Slider slides={selectService} showCurrent={true} />
        <Slider slides={slides}/>
      </>
    </div>
  );
};

export default Contents;
