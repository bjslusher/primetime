import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

export const Watchlist = (props) => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
    { props.isLoggedIn
      ?
      
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        <span className="add-movies">
            <h1><strong><Link to='/watchlist/add'>Add Movie to Watchlist</Link></strong></h1>
            <h2><Link to='/watchlist/watched'>Watched Movies</Link></h2>
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
    :
    <div>
        <button className="not-logged-in" ><Link to='/'>YOU MUST BE LOGGED IN TO VIEW CONTENT</Link></button>
    </div>
   
          
        }
  </div>
  );
};

export default Watchlist;