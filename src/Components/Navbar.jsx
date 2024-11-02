import { useContext, useEffect, useState } from 'react';
import logo from '../assets/PrimeTimeLogo.png'
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { SelectionContext } from '../Context/SelectionContext';
import { IoMenu } from "react-icons/io5";
function Navbar() {
  const { show, setShow } = useContext(SelectionContext);
  const [name, setName] = useState("");
  const [pos, setPosition] = useState(false)

  function handleClick() {
    setShow(prev => !prev)
  }

  const Navigate = useNavigate();
  function handleChange(e) {
    setName(e.target.value);
  }
  function handelClick2() {
    if (name.length === 0) {
      alert("Enter Movie name");
    }
    else {
      Navigate(`/search/${name}`);
    }
  }
  function close() {
    setShow(false)
  }
  useEffect(() => {
  }, [pos])


  return (
    <div className='w-full h-20   text-white flex justify-between items-center px-5 sm:px-10 fixed backdrop-blur-md bg-black/80 z-40'>
      <Link className=" filter invert-[90%] w-7/12 sm:w-3/12 cursor-pointer" to="/"><img src={logo} /></Link>
      <div className='  xl:w-3/12 sm:gap-3 hidden sm:flex justify-around font-semibold text-2xl'>
        <div className='hover:text-red-500 cursor-pointer'><Link to="/movies">Movies</Link></div>
        <div className='hover:text-red-500 cursor-pointer'><Link to="/tvshows">TVShows</Link></div>
        <div className='w-10 h-8 flex justify-center items-center hover:text-red-500 cursor-pointer' onClick={handleClick} ><FaSearch /></div>
      </div>
      <div className={(show) ? `absolute  z-50 w-full h-full flex justify-center items-center backdrop-blur-md bg-black/80 top-[0px]` : `absolute z-50 w-full h-full flex justify-center items-center backdrop-blur-md bg-black/80 top-[-1000px]`}>
        <div className="mt-4 w-10/12 mx-auto flex justify-center ms-[-5px] sm:ms-0">
          <input className="border-none w-8/12 sm:w-5/12 p-3 me-2 rounded-lg text-black text-md focus:outline-none tracking-wide" type="text" value={name} onChange={handleChange} name="" id="" />
          <button onClick={handelClick2} className="w-2/6 sm:w-1/6 py-3 backdrop-blur-md bg-red-500/20 rounded-lg font-semibold hover:bg-red-500 z-50 ">Search</button>
          <button className='w-1/12 ms-2 sm:ms-0 hover:text-red-500 z-50' onClick={close}>X</button>
        </div>
      </div>
      <div className='sm:hidden'>
        <IoMenu onClick={() => { setPosition(true) }} className='h-9 w-9' />
      </div>
      <div className={(pos) ? `w-full duration-500  flex absolute top-0 right-0 sm:hidden backdrop-blur-md bg-black/80 pt-48  ` : `w-full  flex absolute top-0 right-full sm:hidden backdrop-blur-md bg-black/80 pt-48  duration-500 `}>
        <button onClick={() => { setPosition(false) }} className='w-1/12 hover:text-red-500 absolute text-2xl top-5 z-50 bg-black right-10 p-2'>X</button>
        <div className='  flex-col w-full absolute text-3xl top-10 '>
          <h1 className='hover:text-red-500 text-center cursor-pointer mb-3 '><Link to="/movies">Movies</Link></h1>
          <h1 className='hover:text-red-500 text-center cursor-pointer  mb-3'><Link to="/tvshows">TVShows</Link></h1>
          <h1 className=' h-8 flex text-center justify-center items-center mb-3 hover:text-red-500 cursor-pointer' onClick={handleClick} >Search</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
