const INITIAL_VALUE = {
    isLoading:true,
    list: []
}

export default function moviesReducer(state= INITIAL_VALUE, action){
    switch(action.type){
        case "GET_MOVIES_LIST":
            return{
                ...state,
                list: action.payload
            }
            case "START_LOADING":
        return {
          ...state,
          isLoading: true,
        }
      case "END_LOADING":
        return {
          ...state,
          isLoading: false,
        }

        default: 
            return state
    }
}