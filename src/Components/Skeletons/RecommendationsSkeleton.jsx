import React from 'react'

function RecommendationsSkeleton() {
  return (
    <div className="my-20 w-10/12 mx-auto">
    {/* Skeleton for Title */}
    <div className="my-10">
        <div className="h-8 w-40 bg-gray-600 rounded-md animate-pulse"></div>
    </div>

    {/* Skeleton for Scrollable Cards */}
    <div className="flex gap-3 overflow-scroll scrollbar-hide">
        {/* Placeholder Cards */}
        {[...Array(5)].map((_, i) => (
            <div key={i} className="min-w-[200px]  bg-gray-600 rounded-md animate-pulse h-64"></div>
        ))}
    </div>
</div>
  )
}

export default RecommendationsSkeleton
