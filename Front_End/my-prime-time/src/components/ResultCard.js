import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const ResultCard = ({movie}) => {
    const{
        addMovieToWatchlist, watchlist
    } = useContext(GlobalContext)

    const storedMovie = watchlist.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : false;
    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                {movie.image ? (
                    <img src={movie.image} alt={`${movie.title} Poster`}/>
                ) : (
                    <div className='filler-poster'></div>
                )}
            </div>
            <div className='info'>
                <div className='header'>
                    <h3 className='title'>{movie.title}</h3>
                    <h4 className='release-date'>{movie.description}</h4>
                </div>
                <div className='controls'>
                    <button className='btn' disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)}>
                    Add to Watchlist
                    </button>
                </div>
            </div>
            
        </div>
    )
}
