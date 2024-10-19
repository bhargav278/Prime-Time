import React, { useEffect, useRef } from 'react';
import VideoSection from './VideoSection';

function VideoSectionContainer({ data }) {
  const scrollContainerRef = useRef(null); 

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;    }
  }, [data]);

  return data ? (
    <div
      ref={scrollContainerRef}
      className='flex overflow-x-scroll w-11/12 mx-auto scrollbar-hide space-x-4'
    >
      {data.map((video) => (
        <VideoSection key={video.id} idKey={video?.key} />
      ))}
    </div>
  ) : null;
}

export default VideoSectionContainer;
