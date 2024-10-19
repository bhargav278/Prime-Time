import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Movie from './Components/Movie.jsx'
import HomePage from './Components/HomePage.jsx'
import Error from './Components/Error.jsx'
import AllMovies from './Components/AllMovies.jsx'
import AllTVShows from './Components/AllTVShows.jsx'
import TVShow from './Components/TVShow.jsx'
import SearchSection from './Components/SearchSection.jsx'
import SeasonPage from './Components/SeasonPage.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/search/:name",
        element:<SearchSection />
      },
      {
        path: "/watch/1/:movieId",
        element: <Movie />,
      },
      {
        path: "/watch/0/:showId",
        element: <TVShow />,
      },
      {
        path: "/watch/0/:showId/season/:s_no",
        element:<SeasonPage />
      },
      {
        path: "/movies",
        element: <AllMovies />
      },
      {
        path: "/tvShows",
        element: <AllTVShows />
      }
    ],
    errorElement: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} >
      <App />
    </RouterProvider>
  </StrictMode>,
)
