import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Hero() {
    const [name, setName] = useState("");

    const Navigate = useNavigate();
    function handleChange(e) {
        setName(e.target.value);
    }
    function handelClick() {
        if (name.length === 0) {
            alert("Enter Movie name");
        }
        else {
            Navigate(`/search/${name}`);
        }
    }


    return (
        <div className=" w-screen h-screen flex flex-col justify-center items-center relative   bg-backImage bg-cover" >
            <div className="pt-28 px-8 sm:py-52 h-full w-full sm:py-25 sm:px-16 bg-gradient-to-t from-black " >
                <div className="font-extrabold text-4xl sm:text-6xl tracking-wide text-red-500 mb-1 select-none">Welcome.</div>
                <div className="font-bold text-2xl   sm:text-4xl tracking-wide select-none">Millions of movies, TV shows and people to discover. Explore now.</div>
                <div className="mt-4">
                    <input className="border-none w-11/12 sm:w-5/12 p-3 me-2 mb-2 rounded-lg text-black text-md focus:outline-none tracking-wide" type="text" value={name} onChange={handleChange} name="" id="" />
                    <button onClick={handelClick} className="w-2/6 sm:w-1/6 py-3 backdrop-blur-md bg-red-500/20 rounded-lg font-semibold hover:bg-red-500 ">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
