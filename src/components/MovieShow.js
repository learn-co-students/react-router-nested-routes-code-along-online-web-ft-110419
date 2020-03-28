import React from 'react'

const MovieShow = (props) => {
	console.log(props.movies)
	return (
		<div>
			<h3>{props.movies[`${props.match.params.movieID}`].title}</h3>
		</div>

	)
}

export default MovieShow;