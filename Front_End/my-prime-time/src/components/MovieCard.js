import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieCard = ({movie, type}) => {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
      } = useContext(GlobalContext);
    return (
        <div className='movie-card'>
            <div className='poster-wrapper'>
                {movie.image ? (
                    <img src={movie.image} alt={`${movie.title} Poster`}/>
                ) : (
                    <div className='filler-poster'></div>
                )}

            </div>
            <div className='watch-delete'>
                <button className='btn' onClick={() => addMovieToWatched(movie)}>Move to Watched</button>
            </div> 
            <div className='delete'>
                <button className='btn' onClick={() => removeMovieFromWatchlist(movie.id)}>Delete</button>
            </div>   
            
        </div>
    );
};
