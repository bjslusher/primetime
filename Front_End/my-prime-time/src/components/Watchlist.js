import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        <span className="add-movies">
            <h1><Link to='/watchlist/add'>Add Movie to Watchlist</Link></h1>
        </span>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
          
        ) : (
          <h2 className="no-movies">GO ON, ADD SOMETHING. YOU KNOW YOU WANT TO!</h2>
        )}
        <hr/>
        
      </div>
    </div>
  );
};

export default Watchlist;