import React, { useEffect, useState } from 'react'
import { API_KEY, TV_SHOW_DATA } from '../assets/URL';
import { useParams } from 'react-router-dom';
import HeroSection from './HeroSection';
import CastSection from './CastSection';
import VideoSectionContainer from './VideoSectionContainer';
import ImageSection from './ImageSection';
import Recommendations from './Recommendations';
import SeasonsContainer from './SeasonsContainer';


function TVShow() {




  let { showId } = useParams();

  const [tvDetails, setTVDetails] = useState(null);
  const [tvCast, setTVCast] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [imageDetails, setImageDetails] = useState(null);
  const [recommendetionDetails, setRecommendetionDetails] = useState(null);
  const [similarDetails, setSimilarDetails] = useState(null);


  async function fetchData() {


    let tvData = await fetch(TV_SHOW_DATA + showId + "?api_key=" + API_KEY);
    let tvInfo = await tvData.json();
    setTVDetails(tvInfo);

    let tvCreditData = await fetch(TV_SHOW_DATA + showId + "/aggregate_credits?api_key=" + API_KEY);
    let tvCreditInfo = await tvCreditData.json();
    setTVCast(tvCreditInfo);

    let tvVideoData = await fetch(TV_SHOW_DATA + showId + "/videos?api_key=" + API_KEY);
    let tvVideoInfo = await tvVideoData.json();
    setVideoDetails(tvVideoInfo?.results);

    let imgData = await fetch(`${TV_SHOW_DATA + showId}/images?api_key=${API_KEY}`);
    let imgInfo = await imgData.json();
    setImageDetails(imgInfo);

    let recommendationData = await fetch(`${TV_SHOW_DATA + showId}/recommendations?api_key=${API_KEY}`);
    let recommendationInfo = await recommendationData.json();
    setRecommendetionDetails(recommendationInfo);

    let similarData = await fetch(`${TV_SHOW_DATA + showId}/similar?api_key=${API_KEY}`);
    let similarInfo = await similarData.json();
    setSimilarDetails(similarInfo);



  }
  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [showId]);
  let trailerData = videoDetails?.filter((ele) => (ele.type === "Trailer") || ele.name === 'Official Trailer' || ele.name === 'Original Trailer');


  return (
    <div className='w-screen'>
      <HeroSection details={tvDetails} trailer={trailerData} />
      <SeasonsContainer seasons={tvDetails?.number_of_seasons} showId={showId} />
      <CastSection details={tvCast?.cast.slice(0, 24)} />
      <div className="relative my-10">
        <div className="mx-6 sm:mx-28 my-10  text-3xl">Videos</div>
        <VideoSectionContainer data={videoDetails} />
      </div>
      <ImageSection data={imageDetails} />
      <Recommendations rData={recommendetionDetails?.results} title={"Recommendations"} type={0} />
      {
        (similarDetails?.results) ? <Recommendations rData={similarDetails?.results} title={"Similar Shows"} type={0} /> : <></>
      }

    </div>
  )
}

export default TVShow
