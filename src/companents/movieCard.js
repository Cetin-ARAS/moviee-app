import React from 'react'

export const MovieCard = ({ item }) => {
const IMG_API ="http://image.tmdb.org/t/p/w1280";
const defaultImage =
"https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
return (
    <div style={{ widht: "300px", border: "1px solid  grey" }}>
        <h1 style={item.title}></h1>
        <img 
         src={item.poster_path ? IMG_API + item.poester_path : defaultImager}
         alt=""
         style={{ widht:"100%", height:"500px"}} />
    </div>
)