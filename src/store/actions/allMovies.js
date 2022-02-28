import axios from "axios";
export const getMoviesList = () =>(dispatch) => {
   return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6836d2d66066d4eb511ca7d62769eb97")
    .then((res) => 
        {
            dispatch({
                type: "GET_MOVIES_LIST",
                payload: res.data.results
            })
        }
    )
    .catch((err) => 
        console.log(err)
    )

}