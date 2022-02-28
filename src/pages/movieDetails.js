import "./movieDetails.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function Moviedetails()
{
const params = useParams()
const [details,setDetails]=useState({})
useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6836d2d66066d4eb511ca7d62769eb97`)
    .then((res)=>setDetails(res.data))
    .catch((err)=>console.log(err))
})

    return(<>
    
    <div className="container details-container">
        <div className="row details">
            <div className="col-md-6">
            <img src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="movie"/>
            </div>
            <div className="col-md-6">
               <h3 className="text-center text-light"> {details.title}</h3>
               <br></br>
               <h6 className="text-light text"><span className="text-danger">Overview:</span><br></br>{details.overview}</h6>
               <br></br>
               <h6 className="text-light text"><span className="text-danger">Vote count:</span><br></br>{details.vote_count}</h6>
               <br></br>
               <h6 className="text-light text"><span className="text-danger">Popularity:</span><br></br>{details.popularity}</h6>
            </div>
        </div>
    </div>
    
    </>)
}