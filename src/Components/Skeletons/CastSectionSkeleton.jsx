import React from 'react'

function CastSectionSkeleton() {
  return (
    <div className='my-20'>
            <div className='w-11/12 mx-auto my-10'>
                {/* Skeleton for Title */}
                <div className='sm:mx-10 my-10'>
                    <div className='h-8 w-32 bg-gray-600 rounded-md animate-pulse'></div>
                </div>

                {/* Skeleton for Slider */}
                <div className='mx-1'>
                    <div className='flex gap-4 overflow-hidden'>
                        {/* Placeholder cards */}
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className='flex flex-col justify-center items-center p-1'>
                                <div className='rounded-lg w-[130px] sm:w-auto md:h-56'>
                                    {/* Skeleton for Image */}
                                    <div className='rounded-3xl h-44 md:h-52 bg-gray-600 border animate-pulse'></div>
                                </div>
                                <div className='pt-1 text-center'>
                                    {/* Skeleton for Character Name */}
                                    <div className='tracking-wider text-sm bg-gray-600 h-4 w-[130px] sm:w-36 mb-2 rounded animate-pulse'></div>

                                    {/* Skeleton for Person's Name */}
                                    <div className='tracking-wider text-sm bg-gray-600 h-4 w-[130px] sm:w-36 rounded animate-pulse'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CastSectionSkeleton
