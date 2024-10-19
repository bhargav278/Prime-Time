import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOVIE_URL, API_KEY, VIDEO_URL, CREDIT_URL, RECOMMENDATION_URL } from "../assets/URL";
import HeroSection from "./HeroSection";
import CastSection from "./CastSection";
import VideoSectionContainer from "./VideoSectionContainer";
import Recommendations from "./Recommendations";
import ImageSection from "./ImageSection";



function Movie() {


  const [movieDetails, setMovieDetails] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [creditsDetails, setCreditsDetails] = useState(null);
  const [recommendetionDetails, setRecommendetionDetails] = useState(null);
  const [similarDetails, setSimilarDetails] = useState(null);
  const [imageDetails, setImageDetails] = useState(null);

  let { movieId } = useParams();

  async function dataFetch() {

    let movieData = await fetch(MOVIE_URL + movieId + "?api_key=" + API_KEY);
    let movieInfo = await movieData.json();
    setMovieDetails(movieInfo);

    let videoData = await fetch(`${VIDEO_URL + movieId}/videos?api_key=${API_KEY}`);
    let videoInfo = await videoData.json();
    let videos = videoInfo?.results;
    setVideoDetails(videos);

    let creditData = await fetch(`${CREDIT_URL + movieId}/credits?api_key=${API_KEY}`);
    let creditInfo = await creditData.json();
    setCreditsDetails(creditInfo);

    let recommendationData = await fetch(
      `${RECOMMENDATION_URL + movieId}/recommendations?api_key=${API_KEY}`
    );
    let recommendationInfo = await recommendationData.json();
    setRecommendetionDetails(recommendationInfo);

    let similarData = await fetch(`${RECOMMENDATION_URL + movieId}/similar?api_key=${API_KEY}`);
    let similarInfo = await similarData.json();
    setSimilarDetails(similarInfo);

    let imgData = await fetch(`${MOVIE_URL + movieId}/images?api_key=${API_KEY}`);
    let imgInfo = await imgData.json();
    setImageDetails(imgInfo);
  }

  let trailerData = videoDetails?.filter(
    (ele) => ele.type === "Trailer" || ele.name === "Official Trailer" || ele.name === "Original Trailer"
  );

  useEffect(() => {

    dataFetch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movieId]); // Trigger effect when movieId changes

  return (
    <div className="w-screen h-auto">
      <HeroSection details={movieDetails} trailer={trailerData} />
      <CastSection details={creditsDetails?.cast} />
      <div className="relative my-10">
        <div className="mx-5 sm:mx-28 my-10 text-3xl">Videos</div>
        <VideoSectionContainer data={videoDetails} />
      </div>
      <ImageSection data={imageDetails} />
      <Recommendations rData={recommendetionDetails?.results} title={"Recommendations"} type={1} />
      {similarDetails?.results ? (
        <Recommendations rData={similarDetails?.results} title={"Similar Movies"} type={1} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Movie;
