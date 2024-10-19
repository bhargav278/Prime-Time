import "./index.css"

import Navbar from "./Components/Navbar"
import { SelectionContext } from "./Context/SelectionContext"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"


function App() {
  
  const [nowPlayingValue, setNowPlayingValue] = useState("Movies");
  const [topRated, setTopRated] = useState("Movies");
  const [popularValue, setPopularValue] = useState("Movies");
  const [tranding, setTranding] = useState("Movies");
  const [show, setShow] = useState(false);

  return (
    <SelectionContext.Provider value={{ nowPlayingValue, setNowPlayingValue, topRated, setTopRated, popularValue, setPopularValue, tranding, setTranding ,show,setShow}}>
      <div className=" text-slate-50 w-full overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>

    </SelectionContext.Provider>
  )
}

export default App
