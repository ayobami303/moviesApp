import axios from 'axios'
import * as types from '../../constants/actionTypes'
import {TMDB_URL, TMDB_API_KEY} from '../../constants/api'

export function retrievePopularMovies(page){
	return function (dispatch){
		return axios.get(`${TMDB_URL}/movie/popular?&api_key=${TMDB_API_KEY}&page=${page}`)
			.then(res =>{
				dispatch(retrievePopularMoviesSuccess(res))
			})
			.catch(error => {
				console.log('popular', error)
			})
	}
}

export function retrievePopularMoviesSuccess(res) {
	return ({
		type: types.RETRIEVE_POPULAR_MOVIES_SUCCESS,
		popularMovies: res.data
	})
}

export function retrieveNowPlayingMovies(page){
	return function (dispatch){
		return axios.get(`${TMDB_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`)
			.then(res =>{
				dispatch(retrieveNowPlayingMoviesSuccess(res))
			})
			.catch(error => {
				console.log('Now Playing', error)
			})
	}
}

export function retrieveNowPlayingMoviesSuccess(res){
	return({
		type: types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS,
		nowPlayingMovies:res.data
	})
}

export function retrieveMovieDetails(movieId){
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=casts,images,videos`)
		.then(res => {
			dispatch(retrieveMovieDetailsSuccess(res))
		})
		.catch( error => {
			console.log('Movie Details', error);
		})
	}
}

export function retrieveMovieDetailsSuccess(res) {
	return({
		type: types.RETRIEVE_MOVIES_DETAILS_SUCCESS,
		details: res.data
	})
}

export function retrieveMoviesList(type, page){
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/movie/${type}?api_key=${TMDB_API_KEY}&page=${page}`)
		.then( res => {
			dispatch(retrieveMoviesListSuccess(res))			
		})
		.catch( error => {
			console.log( 'MoviesList', error)
		})
	}
}

export function retrieveMoviesListSuccess(res) {
	return({
		type: types.RETRIEVE_MOVIES_LIST_SUCCESS,
		list: res.data
	})
}

export function retrieveMoviesSearchResults(query, page){
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`)
					.then((res) => {
						dispatch(retrieveMoviesSearchResultsSuccess(res))
					})
					.catch(error => {
						console.log('Movies Search Result', error)
					})
	}
}

export function retrieveMoviesSearchResultsSuccess(res) {
	return ({
		type: types.RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS,
		searchResults: res.data
	})
}