import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
import { Link } from "react-router-dom";
//components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
//hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//image
import NoImage from '../images/no_image.jpg';


const Home = (props) => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
    if (error) return <div>Something Just Ain't Right Here</div>
    
    return (
    <> 
        { props.isLoggedIn
        ?
        <div>
        {state.results[0] ? 
        <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
         />
         : null
        } 
        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
            {state.results.map(movie => (
                <Thumb
                key={movie.id}
                clickable
                image={
                    movie.poster_path
                     ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                     : NoImage
                }
                movieId={movie.id}
                />
            ))}

        </Grid>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (<Button text='Load More' callback={() => setIsLoadingMore(true)} />)}
        </div>
        :
            <div>
                    <button className="not-logged-in" ><Link to='/'>YOU MUST BE LOGGED IN TO VIEW CONTENT</Link></button>
            </div>
        }
    </>  
    );
        
    
}

export default Home;