import React from 'react'

function SessionPageSkeleton() {
  return (
    <div className='pt-16'>
    {/* Skeleton for Episode Header */}
    <div className='mt-10 tracking-wider h-[120px] mx-auto flex items-center gap-5 px-10 bg-gray-950'>
        <div>
            <div className='w-14 h-20 bg-gray-600 animate-pulse rounded-md'></div>
        </div>
        <div className='text-center text-3xl font-bold h-8 w-56 bg-gray-600 animate-pulse rounded-md'></div>
    </div>

    {/* Skeleton for Episodes List */}
    <div className='mt-20 flex flex-col gap-4'>
        {/* Placeholder Episodes */}
        {[...Array(5)].map((_, i) => (
            <div key={i} className='flex items-center bg-gray-600 h-16 rounded-md animate-pulse'></div>
        ))}
    </div>
</div>

  )
}

export default SessionPageSkeleton
