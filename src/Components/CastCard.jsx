import React from 'react'
// || 
function CastCard({ personDetails }) {
    // console.log(personDetails)
    let charname = null;
    if (personDetails?.character) {
        charname = personDetails?.character;
    }
    else if (personDetails?.roles) {
        charname = personDetails?.roles[0]?.character;
    }
    return (personDetails) ? (
        <div className='flex flex-col justify-center items-center p-1'>
            <div className='rounded-lg w-[130px] sm:w-auto md:h-56'>
                <img
                    className='rounded-3xl h-44 md:h-52 border object-cover'
                    src={(personDetails?.profile_path)
                        ? `https://media.themoviedb.org/t/p/w138_and_h175_face${personDetails?.profile_path}`
                        : "https://as1.ftcdn.net/v2/jpg/09/89/09/56/1000_F_989095613_BbuYiulrp81OPxcsQGP9sLBmUaSstTaN.jpg"}
                    alt=""
                />
            </div>
            <div className='pt-1 text-center'>
                <div className='tracking-wider text-sm text-gray-400 text-left w-[130px] sm:w-auto'>{charname}</div>
                <div className='tracking-wider text-sm text-left w-[130px] sm:w-auto'>{personDetails?.name}</div>
            </div>
        </div>

    ) : <></>

}

export default CastCard
