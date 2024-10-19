import React, { useEffect, useState } from 'react';
import SlideCard from './SlideCard';
import { Link } from 'react-router-dom';
import { ALL_MOVIE_URL, API_KEY } from '../assets/URL';

function AllMovies() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch data based on the page number
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${ALL_MOVIE_URL + page}&sort_by=popularity.desc&api_key=${API_KEY}&sort_by=popularity.desc`);
      const result = await response.json();
      const newData = result.results || [];
      setData(prevData => [...prevData, ...newData]);

      // Stop loading more if no new data is returned
      if (newData.length === 0) {
        setHasMore(false);
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // Debounce function to control how often the scroll handler is triggered
  const debounce = (func, wait) => {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

      // Check if the user has scrolled to the bottom of the page
      if (scrollTop + clientHeight >= scrollHeight - 50 && hasMore && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    }, 200); // Debounce the scroll event by 200ms

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll); // Add touchmove for mobile

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <div className='pt-20 flex gap-3 flex-wrap justify-center items-center w-full px-0'>
      {data.map((ele, idx) => (
        <Link to={`/watch/1/${ele.id}`} key={idx} className='sm:w-2/12 sm:pl-4'>
          <SlideCard data={ele} rate={false} />
        </Link>
      ))}

      {/* Show loading spinner/message at the bottom when fetching data */}
      {loading && (
        [...Array(4)].map((_, i) => (
          <div key={i} className='sm:w-2/12 sm:pl-4'>
            <div className="w-full h-48 bg-gray-600 animate-pulse rounded-lg"></div>
          </div>
        ))
      )}

      {/* No more data message */}
      {!hasMore && !loading && (
        <div className="w-full text-center py-4">
          <div className="h-8 w-48 bg-gray-600 rounded-md animate-pulse mx-auto"></div>
        </div>
      )}
    </div>
  );
}

export default AllMovies;
