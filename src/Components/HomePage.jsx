import Hero from "./Hero"
import CardShowcase from "./CardShowcase"
import { useContext, useEffect, useState } from "react"

import { NOW_PLAYING_MOVIES_URL, NOW_PLAYING_TVSHOWS_URL, TOP_RATED_MOVIES, TOP_RATED_TVSHOWS, API_KEY, POPULAR_MOVIES, POPULAR_TVSHOWS, UPCOMING_MOVIES, UPCOMING_TVSHOWS } from "../assets/URL";
import { SelectionContext } from "../Context/SelectionContext";
function HomePage() {


    //now playing
    const [nowPlayingMovie, setNowPlayingMovie] = useState(null);
    const [nowPlayingTVShow, setNowPlayingTVShow] = useState(null);
    const [movieOrTVShow, setMovieOrTVShow] = useState(nowPlayingMovie);

    //top rated
    const [topRatedMovie, setTopRatedMovie] = useState(null);
    const [topRatedTVShow, setTopRatedTVShow] = useState(null);
    const [topRatedMovieOrTV, setTopRatedMovieOrTv] = useState(topRatedMovie);

    //popular
    const [popularMovies, setPopularMovies] = useState(null);
    const [popularTVShow, setPopularTVShow] = useState(null);
    const [popularMovieOrTv, setPopularMovieOrTv] = useState(popularMovies);

    //upcoming
    const [upComingMovies, setUpComingMovies] = useState(null);
    const [upComingTVShows, setUpComingTVShows] = useState(null);
    const [upComingMovieOrTV, setUpComingMovieOrTV] = useState(upComingMovies);



    const { nowPlayingValue, topRated, popularValue, tranding } = useContext(SelectionContext);





    // console.log(topRated);
    async function getData() {

        //now playing movie
        let data = await fetch(NOW_PLAYING_MOVIES_URL + API_KEY);
        let info = await data.json();
        setNowPlayingMovie(info);

        //now  playing tv
        let tvData = await fetch(NOW_PLAYING_TVSHOWS_URL + API_KEY);
        let tvInfo = await tvData.json();
        setNowPlayingTVShow(tvInfo);

        //top rated movie
        let topMovieData = await fetch(TOP_RATED_MOVIES + API_KEY);
        let topMovieInfo = await topMovieData.json();
        setTopRatedMovie(topMovieInfo);

        //top rated tv
        let topTVData = await fetch(TOP_RATED_TVSHOWS + API_KEY);
        let topTVInfo = await topTVData.json();
        setTopRatedTVShow(topTVInfo);

        //popular movie
        let popularData = await fetch(POPULAR_MOVIES + API_KEY);
        let popularInfo = await popularData.json();
        setPopularMovies(popularInfo);

        //popular tv
        let popTvData = await fetch(POPULAR_TVSHOWS + API_KEY);
        let popTvInfo = await popTvData.json();
        setPopularTVShow(popTvInfo);

        //upComing movie
        let upMovieData = await fetch(UPCOMING_MOVIES + API_KEY);
        let upMovieInfo = await upMovieData.json();
        setUpComingMovies(upMovieInfo);

        //upcoming tv
        let upTVData = await fetch(UPCOMING_TVSHOWS + API_KEY);
        let upTVInfo = await upTVData.json();
        setUpComingTVShows(upTVInfo);

    }
    // console.log(upComingMovies);


    useEffect(() => {
        getData();
    }, [])




    useEffect(() => {
        //now playing
        if (nowPlayingValue === 'Movies') {
            setMovieOrTVShow(nowPlayingMovie);
        }
        else if (nowPlayingValue === 'TVShows') {
            setMovieOrTVShow(nowPlayingTVShow)
        }

        //top rated
        if (topRated === "Movies") {
            setTopRatedMovieOrTv(topRatedMovie);
        }
        else if (topRated === "TVShows") {
            setTopRatedMovieOrTv(topRatedTVShow)
        }

        //popular
        if (popularValue === "Movies") {
            setPopularMovieOrTv(popularMovies);
        }
        else if (popularValue === "TVShows") {
            setPopularMovieOrTv(popularTVShow);
        }

        //upcoming
        if (tranding === "Movies") {
            setUpComingMovieOrTV(upComingMovies);
        }
        else if (tranding === "TVShows") {
            setUpComingMovieOrTV(upComingTVShows);
        }

    })


    // console.log(topRatedMovieOrTV);
    return (
        <>
            <Hero />
            {/* top rated */}

            <CardShowcase information={topRatedMovieOrTV?.results} title={"Top Rated"} />
            {/* now playing */}
            <CardShowcase information={movieOrTVShow?.results} title={"Now Playing"} />
            {/* popular */}
            <CardShowcase information={popularMovieOrTv?.results} title={"Popular"} />
            {/* upcoming */}
            <CardShowcase information={upComingMovieOrTV?.results} title={"Tranding"} />


        </>
    )
}

export default HomePage
