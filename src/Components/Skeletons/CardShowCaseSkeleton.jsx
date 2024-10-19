import React from 'react'

function CardShowCaseSkeleton() {
  return (
    <div className="sm:mx-10 mb-10 px-7 sm:px-10">
    {/* Skeleton for Title and Buttons */}
    <div className="flex justify-between items-center py-10">
        {/* Skeleton for Title */}
        <div className="h-8 w-40 bg-gray-600 rounded-md animate-pulse"></div>

        {/* Skeleton for Buttons */}
        <div className="flex flex-col sm:flex-row gap-1 sm:w-auto sm:gap-6">
            <div className="h-10 w-20 bg-gray-600 rounded-md animate-pulse"></div>
            <div className="h-10 w-20 bg-gray-600 rounded-md animate-pulse"></div>
        </div>
    </div>

    {/* Skeleton for Slider */}
    <div className="flex justify-center items-center w-11/12 mx-auto">
        <div className="flex gap-4 overflow-hidden">
            {/* Placeholder Slider Items */}
            {[...Array(5)].map((_, i) => (
                <div key={i} className="min-w-[200px] h-64 bg-gray-600 rounded-md animate-pulse"></div>
            ))}
        </div>
    </div>
</div>

  )
}

export default CardShowCaseSkeleton
