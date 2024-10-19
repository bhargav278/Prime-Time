import RecommendationsSkeleton from './Skeletons/RecommendationsSkeleton';
import SlideCard from './SlideCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

// type 0 - tvshow
// type 1 - movies
function Recommendations({ rData, title, type = 1 }) {
  var check;
  if (type === 1) {
    const { movieId } = useParams();
    check = movieId;
  } else {
    const { showId } = useParams();
    check = showId;
  }
  const navigate = useNavigate();
  
  const scrollContainerRef = useRef(null); 

  const handleCardClick = (change) => {
    navigate(`/watch/${type}/${change}`);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0; 
    }
  }, [rData, type, check]); 

  return rData ? (
    <div className="my-20 w-10/12 mx-auto">
      <div className="my-10 text-3xl">{title}</div>
      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-scroll scrollbar-hide"
      >
        {rData.map((card) => (
          <div
            className="cursor-pointer"
            key={card.id}
            onClick={() => handleCardClick(card.id)}
          >
            <SlideCard
              className="min-w-[200px] border"
              data={card}
              rate={false}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <RecommendationsSkeleton />
  );
}

export default Recommendations;
