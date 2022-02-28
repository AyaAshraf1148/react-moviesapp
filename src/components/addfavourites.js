import { useDispatch , useSelector } from "react-redux"
import { DeleteCart } from "../store/actions/favourite";
import { Link } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs';

function FavoriteMovies(){
    let ListCart = [];
    const fav = useSelector((state) => state.favorite.Carts )
    const dispatch = useDispatch()
    
    Object.keys(fav).forEach(function(item){
        ListCart.push(fav[item]);
    });
    const Delete = (key) => {
        dispatch(DeleteCart(key))
    }

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
    return(
        <>
        <div className="movie-container" >
        
                            {ListCart.map((movie,key)=>{
                            return(<div key={movie.id} className="movie"><img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie"/>
                            <div className="movie-info">
                            <Link to={`/moviedetails/${movie.id}`} className="namelink"><h3>{movie.title}</h3> </Link>
                                <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                            </div>
                            <BsFillTrashFill className="trash" type="button" onClick={()=>Delete(key)}/>
                            </div>)
                            }
                            )}
                            </div>
                      
        </>
    )
}

export default FavoriteMovies;