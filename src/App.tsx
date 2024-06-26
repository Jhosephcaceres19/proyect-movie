import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./view/navbar/Navbar";
import ServiceApp from "./services/ServiceApp";
import { AppMovieList } from "./components/AppMovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesnow, setMoviesnow] = useState([]);
  const [all, setAll] = useState([]);
  const [viewone, setViewone] = useState([]);
  const [viewtwo, setViewtwo] = useState([]);

  useEffect(() => {
    const allMovies = async () => {
      try {
        const allMovies = await ServiceApp.viewAll();
        setMovies(allMovies);
        const allMoviesNow = await ServiceApp.viewAllNow();
        setMoviesnow(allMoviesNow);
        const all = await ServiceApp.latest();
        setAll(all);
        const viewone = await ServiceApp.viewAllOne();
        setViewone(viewone)
        const viewtwo = await ServiceApp.viewAllTwo();
        setViewtwo(viewtwo)
      } catch (error) {
        console.error("la peticion fallo", error);
      }
    };
    allMovies();
  }, []);
  return (
    <>
      <div className="app-main">
        <Navbar />
        <div className="api-app">
          <div className="flex flex-col ">
            <AppMovieList movies={movies}/>
            <AppMovieList movies={moviesnow}/>
            <AppMovieList movies={all}/>
            <AppMovieList movies={viewone}/>
            <AppMovieList movies={viewtwo}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
