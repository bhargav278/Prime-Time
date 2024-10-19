import React from 'react'

function EpisodeCard({ data }) {
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
  let path = data?.still_path;
  let epiNo = data?.episode_number;
  let name = data?.name;
  let rating = data?.vote_average;
  let date1 = data?.air_date;
  let date = new Date(date1);
  let runtime = data?.runtime;
  let overview = data?.overview;
  // console.log(date.getMonth());

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-10/12 h-auto md:h-40 mx-auto my-4 px-4 rounded-xl bg-gray-900">
      {/* Image Container */}
      <div className="w-full md:w-3/12 h-64 md:h-full flex justify-center items-center">
        <img
          className="rounded-xl w-11/12 h-5/6 md:h-full"
          src={
            path
              ? `https://media.themoviedb.org/t/p/w227_and_h127_bestv2/${path}`
              : "https://as1.ftcdn.net/v2/jpg/09/89/09/56/1000_F_989095613_BbuYiulrp81OPxcsQGP9sLBmUaSstTaN.jpg"
          }
          alt="Episode Thumbnail"
        />
      </div>
      {/* Content Container */}
      <div className="w-full md:w-9/12 h-auto md:h-full pl-5 pr-5 py-4 flex flex-col">
        {/* Episode Info */}
        <div className="mb-1 text-lg md:text-xl tracking-wide flex gap-6">
          <span>{epiNo}</span>
          <span>{name}</span>
        </div>
        {/* Rating and Date */}
        <div className="flex gap-6 mb-4 ml-0 md:ml-10 text-gray-500">
          <span className="text-red-400">{rating.toFixed(1)} star</span>
          <span>
            {date1
              ? `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
              : "Not decided, coming soon..."}
          </span>
          {runtime ? (
            <span className="text-green-400">
              {runtime > 60
                ? `${Math.floor(runtime / 60)}h ${runtime % 60}m`
                : `${runtime}m`}
            </span>
          ) : null}
        </div>
        {/* Overview */}
        <div className="ml-0 md:ml-10 tracking-wider line-clamp-2 text-gray-400">
          {overview || null}
        </div>
      </div>
    </div>

  )
}

export default EpisodeCard
