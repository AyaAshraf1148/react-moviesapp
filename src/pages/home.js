import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/movielist";
import { ClipLoader } from "react-spinners";


export default function Home()
{
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
    },[])
    const[movies,setMovies]=useState([null])
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6836d2d66066d4eb511ca7d62769eb97")
    .then((res)=>
    
        //console.log(res.data.results),
    
        setMovies(res.data.results)
   )
   .setLoading(true)
    .catch((err)=>
         console.log(err)
         )},[]);

    
         
         
    return(<>
   
        <div className="movie-container">
            
             <MovieList movies={movies}  />
            {/* {loading ?  <MovieList movies={movies}  />:}/>} */}
            {/* <ClipLoader size={30} color={'#7ED321'}/> */}

        </div>
   
    </>)
}