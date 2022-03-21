import axios from "axios";
// export const startLoading = (payload) => {
//     return{
//       type: "START_LOADING",
//       payload
//     }
//   }

//   export const endLoading = (payload) => {
//     return{
//       type: "END_LOADING",
//       payload
//     }
//   }
export const getMoviesList = () =>(dispatch) => {
   return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6836d2d66066d4eb511ca7d62769eb97")
    .then((res) => 
        {
            dispatch({type:"START_LOADING"});
            dispatch({
                type: "GET_MOVIES_LIST",
                payload: res.data.results
            });
            dispatch({type:"END_LOADING"});
        }
    )
    .catch((err) => 
        console.log(err)
    )

}