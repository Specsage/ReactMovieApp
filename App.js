//Api key:  b11f9386

import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

//Declare Variables
const API_URL = 'http://www.omdbapi.com?apikey=b11f9386';

const movie = {
    "Title": "The Transformers: The Movie",
    "Year": "1986",
    "imdbID": "tt0092106",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDg0MjY5NjUtNTEyMy00Y2NjLWI2YzQtYTkyMDU1NDhiODFjXkEyXkFqcGc@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
     
    const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();//returns movie data
        
      setMovies(data.Search);
    }

    useEffect(() =>{
       searchMovies('Transformers'); 

    }, []);


    return ( 
        <div className = "app">

            <h1>ShowboxTV </h1>

            <div className = "search">
            <input placeholder = "Search for Movies"
            value = {searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}} />
            
            <img src = {SearchIcon}
                alt = "search"
                oncClick = {() => searchMovies(searchTerm)}
            />
             </div> 

             {
                movies?.length > 0
                ?(
                    <div className = "container" >
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))}
                        </div>
                ) : (
                    <div className = "empty">
                        <h2> No movies found</h2>
                    </div>
                )
             }

            
        
        </div>

        
    );
}

export default App;

