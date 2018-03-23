import { Navigation } from 'react-native-navigation'
import Movies from './modules/movies/Movies'
import Movie from './modules/movies/Movie'
import MoviesList from './modules/movies/MoviesList'
import Search from './modules/movies/Search'
import Drawer from './modules/global/Drawer'

export function registerScreens(store, Provider) {
	Navigation.registerComponent('moviesapp.Search', () => Search, store, Provider)
	Navigation.registerComponent('moviesapp.MoviesList', () => MoviesList, store, Provider)
	Navigation.registerComponent('moviesapp.Movies', () => Movies, store, Provider)
	Navigation.registerComponent('moviesapp.Movie', () => Movie, store, Provider)
	Navigation.registerComponent('app.Drawer', () => Drawer)
	Navigation.registerComponent('app.FirstScreen', () => FirstScreen, store, Provider)
}