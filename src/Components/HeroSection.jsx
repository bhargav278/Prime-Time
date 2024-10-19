
import { IMG_URL } from "../assets/URL";
import Badges from "./Badges";
import HeroSectionSkeleton from "./Skeletons/HeroSectionSkeleton";
import UserScore from "./UserScore"
import WatchTrailer from "./WatchTrailer"


function HeroSection({ details, trailer = null }) {


    // console.log(trailer);
    let genres = details?.genres;
    let title = details?.title || details?.name;
    let status = details?.status;
    let tagline = details?.tagline;
    let rating = details?.vote_average;
    let runtime = details?.runtime || null;
    let seasons = details?.number_of_seasons || null;
    let releasedate = details?.release_date || details?.first_air_date;
    let overview = details?.overview;
    let countries = details?.origin_country[0];
    let backImgName = details?.backdrop_path;
    let imgName = details?.poster_path;
    let date = new Date(releasedate);
    let styles = {
        backgroundImage: `url(${IMG_URL + backImgName})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
        width: "100%",

    }
    // console.log();
    return (details) ? (
        <div style={styles} className="w-full sm:h-screen md:pt-16  bg-cover bg-center">
            <div className="w-full h-full pt-24 backdrop-blur-sm bg-black/75 flex flex-col md:flex-row">
                <div className="h-full w-full md:w-5/12 flex justify-center items-center">
                    <img className="border rounded-3xl" src={`${IMG_URL + imgName}`} alt="" />
                </div>
                <div className="w-full p-5 md:w-7/12 md:p-10 mt-7 relative">
                    <div className="text-xl sm:text-2xl md:text-4xl font-bold tracking-wide">{title} ({date.getFullYear()})</div>
                    <div className="mt-2 mb-3 flex flex-col sm:flex-row gap-2 md:gap-4 text-gray-500">
                        <span className="text-green-700 text-sm  font-bold lg:text-base">{status}</span>
                        <span className="text-sm lg:text-base">{releasedate} ({countries})</span>
                        {
                            (runtime)
                                ? <span className="bg-gray-500 px-2 sm:px-4 text-black font-semibold rounded-full flex justify-center w-4/12 sm:w-auto text-sm sm:text-base">{Math.floor(runtime / 60)}h {runtime % 60}m</span>
                                : <span className="bg-gray-500 px-2 sm:px-4 text-black font-semibold rounded-full flex justify-center w-4/12 sm:w-auto text-sm sm:text-base">{seasons} Seasons</span>
                        }
                    </div>
                    <div className="flex gap-1 md:gap-4  flex-wrap">
                        {genres?.map((ele) => <Badges key={ele.id} data={ele} />)}
                    </div>
                    <div className="mt-9 text-lg md:text-2xl text-red-300 mb-2 font-semibold">{tagline}</div>
                    <div className="text-sm md:text-lg tracking-wide text-justify min-h-30 line-clamp-4">{overview}</div>
                    <div className="flex flex-col md:flex-row mt-5 items-center gap-1 ">
                        <div className="flex flex-col md:flex-row items-center gap-4 ">
                            <div className="w-[40px] absolute top-[25%] left-[50%] md:top-0 md:left-0 md:relative   md:w-[85px] sm:h-[85px] ">
                                <UserScore progress={rating} />
                            </div>
                            <div className=" absolute md:relative top-[25%] left-[50%] md:mt-[-20px]  md:left-[-40%]  md:w-[85px] sm:h-[85px]">
                                <WatchTrailer trailerKey={trailer} />
                            </div>
                            <div className="text-lg md:text-2xl tracking-wider font-semibold text-white hidden md:block">Watch Trailer</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    ) : <HeroSectionSkeleton />
}

export default HeroSection
