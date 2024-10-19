import React, { useEffect, useRef } from 'react';
import { IMG_URL } from '../assets/URL';

function ImageSection({ data }) {
  const scrollContainerRef = useRef(null); 

  const arr = data ? [...data.backdrops] : [];


  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0; 
    }
  }, [data]); 

  return data ? (
    <div className="my-20 w-10/12 mx-auto h-[400px]">
      <div className="my-10 text-3xl">Images</div>
      
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scrollbar-hide h-[300px] gap-3"
      >
        {arr.map((ele, idx) => (
          <img key={idx} src={IMG_URL + ele.file_path} alt={`Backdrop ${idx}`} />
        ))}
      </div>
    </div>
  ) : null;
}

export default ImageSection;
