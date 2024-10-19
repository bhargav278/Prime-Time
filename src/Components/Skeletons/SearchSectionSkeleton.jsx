import React from 'react'

function SearchSectionSkeleon() {
  return (
    <div className="pt-32 w-full">
  {/* Skeleton for Buttons */}
  <div className="flex flex-wrap w-full justify-center items-center mb-5">
      {/* Button Skeleton for Movies */}
      <div className={`m-3 p-2 md:p-3 w-5/12 sm:w-3/12 md:w-2/12 tracking-wider border rounded-xl bg-gray-600 animate-pulse`}></div>
      
      {/* Button Skeleton for TV Shows */}
      <div className={`m-3 p-2 md:p-3 w-5/12 sm:w-3/12 md:w-2/12 tracking-wider border rounded-xl bg-gray-600 animate-pulse`}></div>
  </div>

  {/* Skeleton for Cards */}
  <div className="flex flex-wrap gap-3 w-full justify-center">
      {/* Placeholder Cards */}
      {[...Array(8)].map((_, idx) => (
          <div key={idx} className="w-5/12 sm:w-4/12 md:w-2/12 pl-4">
              <div className="w-full h-48 bg-gray-600 rounded-lg animate-pulse"></div>
          </div>
      ))}
  </div>
</div>
  )
}

export default SearchSectionSkeleon
