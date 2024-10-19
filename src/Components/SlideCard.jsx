import { IMG_URL } from "../assets/URL"
import RatingProgress from "./RatingProgress";
function SlideCard({ data, rate = true }) {
  // console.log(data)
  let image = data.poster_path;
  let title = data.title || data.name;
  const date = new Date(data.release_date || data.first_air_date);
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];


  return (
    <div className="relative text-sm lg:text-lg min-w-[100px] min-h-[250px] lg:min-h-[450px]  md:min-w-[200px]  rounded-2xl p-1 hover:opacity-75">

      {(rate) ? <RatingProgress progress={data.vote_average} /> : <></>}
      <img className="rounded-xl mb-1 w-[100px] sm:min-w-[100px] md:min-w-[100px] lg:min-w-[200px]" src={(data.poster_path) ? IMG_URL + image : "https://as1.ftcdn.net/v2/jpg/09/89/09/56/1000_F_989095613_BbuYiulrp81OPxcsQGP9sLBmUaSstTaN.jpg"} alt="no image" />
      <div className=" w-[100px] sm:w-full" >{title}</div>
      <div className="text-gray-500 ">{(data.release_date || data.first_air_date) ? `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}` : "Planned"}</div>
    </div>
  )
}

export default SlideCard
