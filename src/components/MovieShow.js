import React from 'react';

const MovieShow = ({ match, movies }) => {

    const moviesParams = movies[match.params.movieId]
    const description = !moviesParams.descrip ? "No description" : moviesParams.descrip
    return (
        <div>
            <h3>{moviesParams.title}</h3>
            {
                <p>{description}</p>
            }
        </div>
    );
}
export default MovieShow;