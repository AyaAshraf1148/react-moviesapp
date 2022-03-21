// const INITIAL_VALUE = {
//     isLoading: true,
   
// }

// export default function loaderReducer(state= INITIAL_VALUE, action){
//     switch(action.type){
//         case "CHANGE_LOADER":
//             return{
//                 ...state,
//                 isLoader: action.payload
//             }
//         default: 
//             return state
//     }
// }

// export default function loaderReducer (state = INITIAL_VALUE, action){
//     switch (action.type) {
//       case "START_LOADING":
//         return {
//           ...state,
//           isLoading: true,
//         };
//       case "END_LOADING":
//         return {
//           ...state,
//           isLoading: false,
//         };

//       default:
//         return state;
//     }
//   };

// export default function loaderReducer(state= INITIAL_VALUE, action){
//     switch(action.type){
//         case "LOADING_TOGGLE_ACTION":
//             return{
//                 ...state,
//                 showloading: action.payload
//             }
//         default: 
//             return state
//     }
// }

