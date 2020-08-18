import {ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_MOVIE_TO_LIST} from '../actions';


const initialMovieState ={
    list:[],
    favourites:[],
    showFavourites:false
};

export default function movies (state=initialMovieState,action){
   switch(action.type){
       case ADD_MOVIES:{
           return {
               ...state,
               list:action.movies
           }
       }
       case ADD_TO_FAVOURITES:{
           return{
               ...state,
               favourites:[action.movie, ...state.favourites]
           }
       }
       case REMOVE_FROM_FAVOURITES:{
           const filteredArray=state.favourites.filter(movie => movie.Title !==action.movie.Title );
           return{
               ...state,
               favourites:filteredArray
           }
       }
       case SET_SHOW_FAVOURITES:{
           return {
               ...state,
               showFavourites:action.val
           }
       }
       case ADD_MOVIE_TO_LIST:{
           return{
               ...state,
               list:[action.movies, ...state.list]
           }
       };
       default:
           return state;
   }
};