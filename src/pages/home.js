import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/movielist";


export default function Home()
{
    const[movies,setMovies]=useState([])
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6836d2d66066d4eb511ca7d62769eb97")
    .then((res)=>
    
        //console.log(res.data.results),
    
        setMovies(res.data.results)
   )
    .catch((err)=>
         console.log(err)
         )},[]);

    
         
         
    return(<>
   
        <div className="movie-container">
            
            <MovieList movies={movies}  />

        </div>
   
    </>)
}