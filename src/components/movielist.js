import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import {AiFillStar} from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../store/actions/favourite";
import { getMoviesList } from "../store/actions/allMovies";


export default function MovieList()
{

    const setVoteClass=(vote)=>{
       if(vote>=8)
       {
           return 'green';
       }
       else if(vote>=6)
       {
           return'orange';
       }
       else 
       {
           return 'red';
       }
    }
    
    const dispatch = useDispatch()
         const movies = useSelector((state) => state.getMovies.list)
         
         useEffect(() => {
             dispatch(getMoviesList())
         }, [])
         const add = (movie) => {
             dispatch(addFavorite(movie))  
         }
         
    
        return(<>
        <div className="movie-container" >
        {movies.map((movie)=>{
                 return(
                     <>
                     
                     <div key={movie.id} className="movie"><img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie"/>
                     <div className="movie-info">
                     <Link to={`/moviedetails/${movie.id}`} className="namelink"><h3>{movie.title}</h3> </Link>
                         <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                     </div>
                     <AiFillStar className="star" type="button" onClick={()=> add(movie)}/>
                     </div>
                     
                     
                    
                </> )
                
             })}
             </div>
        </>)
        

   
}