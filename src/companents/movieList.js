import React from 'react'
import {MovieCard} from "./movieCard";

const movieList = ({ movie }) => {
    console.log("movie from movieList", movie);
  return (
    <div style={{
        border: "2px solid green", 
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around" }} >
    movieList
        {movie?.map((item, indez) =>(
            <MovieCard item={item] key={index} />
        ))}
    </div>
  };
};

