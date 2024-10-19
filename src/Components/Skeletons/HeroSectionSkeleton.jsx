import React from 'react'

function HeroSectionSkeleton() {
    let styles = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
        width: "100%",
    
    }
  return (
    <div style={styles} className="w-full sm:h-screen md:pt-16 bg-cover bg-center">
    <div className="w-full h-full pt-24 backdrop-blur-sm bg-black/75 flex flex-col md:flex-row">
        <div className="h-full w-full md:w-5/12 flex justify-center items-center">
            {/* Skeleton for Image */}
            <div className="w-3/4 h-96 bg-gray-700 rounded-3xl animate-pulse"></div>
        </div>
        <div className="w-full p-5 md:w-7/12 md:p-10 mt-7 relative">
            {/* Skeleton for Title */}
            <div className="w-3/4 h-8 sm:h-10 md:h-12 bg-gray-600 rounded-md animate-pulse"></div>

            {/* Skeleton for status and other info */}
            <div className="mt-4 mb-3 flex flex-col sm:flex-row gap-2 md:gap-4">
                <span className="w-16 h-6 bg-gray-600 rounded animate-pulse"></span>
                <span className="w-28 h-6 bg-gray-600 rounded animate-pulse"></span>
                <span className="w-20 h-6 bg-gray-600 rounded animate-pulse"></span>
            </div>

            {/* Skeleton for genres */}
            <div className="flex gap-1 md:gap-4 flex-wrap">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-16 h-8 bg-gray-600 rounded animate-pulse"></div>
                ))}
            </div>

            {/* Skeleton for tagline */}
            <div className="mt-9 w-1/2 h-8 bg-gray-600 rounded-md animate-pulse"></div>

            {/* Skeleton for overview */}
            <div className="mt-4 w-full h-24 bg-gray-600 rounded-md animate-pulse"></div>

            {/* Skeleton for user score and trailer */}
            <div className="flex flex-col md:flex-row mt-5 items-center gap-1 ">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-[40px] md:w-[85px] sm:h-[85px] bg-gray-600 rounded-full animate-pulse"></div>
                    <div className="w-[40px] md:w-[85px] sm:h-[85px] bg-gray-600 rounded-full animate-pulse"></div>
                    <div className="hidden md:block w-32 h-8 bg-gray-600 rounded-md animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default HeroSectionSkeleton
