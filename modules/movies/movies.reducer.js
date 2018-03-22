import * as types from '../../constants/actionTypes'
import initialState from '../../reducers/initialState'

export default function (state = initialState.movies, action){
	switch (action.type){		
		case types.RETRIEVE_POPULAR_MOVIES_SUCCESS :
			return {...state, popularMovies:action.popularMovies}
		break;
		
		case types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS :
			return {...state, nowPlayingMovies:action.nowPlayingMovies}
		break;
		
		case types.RETRIEVE_MOVIES_GENRES_SUCCESS :
			return {...state, genres:action.moviesGenres}
		break;
		
		case types.RETRIEVE_MOVIES_LIST_SUCCESS :
			return {...state, list:action.list}
		break;
		
		case types.RETRIEVE_MOVIES_DETAILS_SUCCESS :
			return {...state, details:action.details}
		break;

		case types.RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS :
			return {...state, searchResults:action.searchResults}
		break;

		default:
		return state
	}
}
