import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const WatchedCard = ({movie, type}) => {
    const {
        moveToWatchlist,
        removeFromWatched,
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
                <button className='btn' onClick={() => moveToWatchlist(movie)}>Move to Watchlist</button>
            </div> 
            <div className='delete'>
                <button className='btn' onClick={() => removeFromWatched(movie.id)}>Delete</button>
            </div>   

            
            
        </div>
    );
};