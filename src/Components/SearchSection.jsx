import React, { useEffect, useState } from 'react';
import SlideCard from './SlideCard';
import { Link, useParams } from 'react-router-dom';
import { SEARCH_MOVIE, API_KEY, SEARCH_TV } from '../assets/URL';
import SearchSectionSkeleon from './Skeletons/SearchSectionSkeleton';

function SearchSection() {
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState('Movies');
  var { name } = useParams();
  async function fetchData() {

    // console.log(name);
    if (selection === 'Movies') {
      var response = await fetch(`${SEARCH_MOVIE}${name}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`);
    }
    else {
      var response = await fetch(`${SEARCH_TV}${name}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`);
    }
    const result = await response.json();
    // console.log(result)

    setData(result?.results);

  };

  useEffect(() => {
    fetchData();
  }, [name, selection]);



  return (data) ? (
    <div className="pt-32 w-full">
      {/* Buttons */}
      <div className="flex flex-wrap w-full justify-center items-center mb-5">
        <button
          className={
            selection === 'Movies'
              ? `m-3 p-2 md:p-3 bg-red-500 w-5/12 sm:w-3/12 md:w-2/12 tracking-wider border rounded-xl`
              : `m-3 p-2 md:p-3 w-5/12 sm:w-3/12 md:w-2/12 tracking-wider border rounded-xl`
          }
          onClick={() => setSelection('Movies')}
        >
          Movies
        </button>
        <button
          className={
            selection !== 'Movies'
              ? `m-3 p-2 md:p-3 bg-red-500 w-5/12 sm:w-3/12 md:w-2/12 tracking-wider border rounded-xl`
              : `m-3 p-2 md:p-3 w-5/12 sm:w-3/12 md:w-2/12 tracking-wider border rounded-xl`
          }
          onClick={() => setSelection('TV Shows')}
        >
          TV Shows
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-3 w-full justify-center">
        {data.map((ele, idx) => (
          <Link
            to={selection === "Movies" ? `/watch/1/${ele.id}` : `/watch/0/${ele.id}`}
            key={idx}
            className="w-5/12 sm:w-4/12 md:w-2/12 pl-4"
          >
            <SlideCard data={ele} rate={false} />
          </Link>
        ))}
      </div>
    </div>

  ) : <SearchSectionSkeleon />

}

export default SearchSection;
