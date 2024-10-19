import { Link, useNavigate } from "react-router-dom";

function SeasonsContainer({ seasons, showId }) {
    var array = new Array(seasons);

    array.fill(true);
    const navigate = useNavigate();
    function navigatePage(number) {
        navigate(`/watch/0/${showId}/season/${number}`);
    }
    return (array) ? (
        <div className='w-11/12 mx-auto my-10'>
            <div className='md:mx-10 my-10 text-4xl'>Seasons</div>
            <div className="flex gap-10 md:mx-10 flex-wrap">
                {
                    array.map((ele, index) => <div key={index} className="border w-20 px-1 text-sm md:w-36 flex justify-center items-center py-2 md:px-4 rounded-3xl md:text-xl cursor-pointer hover:bg-slate-400 hover:text-black" onClick={() => { navigatePage(index + 1) }}>Season {index + 1}</div>)
                }
            </div>
        </div>
    ) :
        <div className='w-11/12 mx-auto my-10'>
            {/* Skeleton for Title */}
            <div className='md:mx-10 my-10'>
                <div className="h-8 w-32 bg-gray-600 rounded-md animate-pulse"></div>
            </div>

            {/* Skeleton for Season Buttons */}
            <div className="flex gap-10 md:mx-10 flex-wrap">
                {/* Placeholder Season Buttons */}
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="border w-20 md:w-36 h-10 bg-gray-600 animate-pulse rounded-3xl"></div>
                ))}
            </div>
        </div>

}

export default SeasonsContainer
