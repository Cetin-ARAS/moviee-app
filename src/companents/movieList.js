import React from 'react'
import {MovieCard} from "./movieCard";

const movieList = ({ movie }) => {
    console.log("movie from movieList", movie);
  return {
    <div>
    movieList
        <MovieCard />
    </div>
  };
};

export default movieList;