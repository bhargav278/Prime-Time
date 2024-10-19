import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EpisodeCard from './EpisodeCard';
import { API_KEY, TV_SHOW_DATA } from '../assets/URL';
import SessionPageSkeleton from './Skeletons/SessionPageSkeleton';

function SeasonPage() {
  const [epiData, setEpiData] = useState(null);
  const { showId, s_no } = useParams();
  let date1 = epiData?.air_date;
  let date = new Date(date1);
  // console.log(showId, " ", s_no);

  async function fetchData() {

    let data = await fetch(TV_SHOW_DATA + showId + "/season/" + s_no + "?api_key=" + API_KEY);
    let info = await data.json()
    setEpiData(info)
  }


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [])

  let episodes = epiData?.episodes;


  // console.log(episodes);
  return (episodes) ? (
    <div className='pt-16'>
      <div className='mt-10 tracking-wider h-[120px] mx-auto flex items-center gap-5 px-10 bg-gray-950'>
        <div><img src={`https://media.themoviedb.org/t/p/w58_and_h87_face${epiData?.poster_path}`} alt="" />
        </div>
        <div className='text-center text-3xl font-bold'>{epiData?.name} ({(date1) ? date.getFullYear() : "not disclosed"}) </div>
      </div>
      <div className='mt-20'>
        {
          episodes.map((episode) => <EpisodeCard data={episode} />)
        }
      </div>
    </div>
  ) :
    <SessionPageSkeleton />
}

export default SeasonPage
