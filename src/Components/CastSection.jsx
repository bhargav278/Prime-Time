import React, { useEffect, useRef } from 'react';
import CastCard from './CastCard';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CastSectionSkeleton from './Skeletons/CastSectionSkeleton';

function CastSection({ details }) {
  const sliderRef = useRef(null); 

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

 
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); 
    }
  }, [details]);

  return details ? (
    <div className="my-20">
      <div className="w-11/12 mx-auto my-10">
        <div className="sm:mx-10 my-10 text-4xl ">Top Cast</div>
   
        <Slider {...settings} ref={sliderRef} className="mx-1">
          {details.map((card) => (
            <CastCard key={card?.id} personDetails={card} />
          ))}
        </Slider>
      </div>
    </div>
  ) : (
    <CastSectionSkeleton />
  );
}

export default CastSection;
