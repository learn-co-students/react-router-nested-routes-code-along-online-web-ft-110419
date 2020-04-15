import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    //To iterate over this object, we'll use Object.keys(movies) 
    //to get an array of keys, then map over this array.
    const renderMovies = Object.keys(movies).map(movieID =>
      <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    );
   
    return (
      <div>
        {renderMovies}
      </div>
    );
  };
   
  export default MoviesList;