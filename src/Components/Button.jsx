import { SelectionContext } from "../Context/SelectionContext"
import { useContext } from "react"
function Button({ value, title }) {
  const { setNowPlayingValue, setTopRated, setPopularValue, setTranding } = useContext(SelectionContext);

  function changeValue() {
    if (title === "Now Playing") {
      setNowPlayingValue(value);
    }

    if (title === "Top Rated") {
      setTopRated(value);
    }
    if (title === "Popular") {
      setPopularValue(value);
    }
    if (title === "Tranding") {
      setTranding(value);
    }

  }

  return (
    <button
      onClick={changeValue}
      className="px-5 py-1 text-lg rounded-lg bg-white/20 font-semibold hover:bg-red-500">{value}</button>
  )
}

export default Button
