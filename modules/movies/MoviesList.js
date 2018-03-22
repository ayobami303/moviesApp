import React, {Component} from 'react'
import {View, ListView, Platform, RefreshControl, Text } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import {TMDB_URL, TMDB_API_KEY} from '../../constants/api'

import styles from './styles/MoviesList'
import * as moviesActions from './movies.actions'
import CardThree from './components/CardThree'
import ProgressBar from '../global/ProgressBar'
import {iconsMap} from '../../utils/AppIcons'

class MoviesList extends Component{
	constructor(props){
		super(props)

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
		this.state = {
			currentPage: 1,
			isRefreshing:false,
			isLoading: true,
      		dataSource: ds.cloneWithRows(['row 1', 'row 2']),
			list: {
				results:[]
			}
		}
	}

	componentWillMount(){
		this._retrieveMoviesList();
	}

	_retrieveMoviesList(isRefreshed){
			// alert(JSON.stringify(this.props.list.results))
		this.props.actions.retrieveMoviesList( this.props.type, this.state.currentPage)
		.then(() => {
			const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2 })
			const dataSource = ds.cloneWithRows(this.props.list.results)

			this.setState({
				list: this.props.list,
				dataSource,
				isLoading: false
			})
		})

		if(isRefreshed && this.setState({isRefreshing: false}));
	}

	_retrieveNextPage = (type) => {
		if (this.state.currentPage !== this.props.list.total_pages ) {
			this.setState({
				currentPage: this.state.currentPage + 1
			})

			let page;
			if (this.state.currentPage === 1) {
				page = 2;
				this.setState({
					currentPage: this.state.currentPage + 1		
				})
			} else {
				page = this.state.currentPage + 1
			}
			axios.get(`${TMDB_URL}/movie/${type}?api_key=${TMDB_API_KEY}&page=${page}`)
			.then( res => {
				const data = this.state.list.results
				const newData = res.data.results;

				newData.map((item, index) => data.push(item))

				this.setState({
					dataSource:this.state.dataSource.cloneWithRows(this.state.list.results)
				})
			})
			.catch(error => {
				console.log('next page', error)
			})
		}
	}

	_viewMovie = (movieId) => {
		this.props.navigator.showModal({
			screen: 'moviesapp.Movie',
			passProps: {
				movieId
			},
			backButtonHidden:true,
			navigatorButtons:{
				rightButtons: [
				{
					id: 'close',
					icon: iconsMap['ios-arrow-round-down']
				}]
			}
		})

		// alert(movieId)
	}

	_onRefresh = () => {
		this.setState({isRefreshing:true})
		this._retrieveMoviesList('isRefreshed')
	}

	render() {
		return (
			this.state.isLoading ? <View style ={styles.progressBar}><ProgressBar /></View> : 
			<ListView
				style = {styles.container}
				enableEmptySections
				onEndReached ={type => this._retrieveNextPage(this.props.type)}
				onEndReachedThreshold = {1200}
				dataSource = {this.state.dataSource}
				renderRow = {rowData => <CardThree info = {rowData} viewMore = {this._viewMovie}/> } 
				renderSeparator = {(sectionId, rowId) => <View key = {rowId} style ={styles.seperator} />}
				renderFooter = {() => <View style={{height: 50}}><ProgressBar/></View>}
				refreshControl = {
					<RefreshControl 
						refreshing = {this.state.isRefreshing}
						onRefresh = {this._onRefresh}
						colors = {['#EA0000']}
						tintColor = "white"
						title = "loading..."
						titleColor = "white"
						progressBackgroundColor = "white"
					/>
				}
			/>
		);
	}
}

let navigatorStyle = {}

if(Platform.OS === 'ios'){
	navigatorStyle={
		navBarTranslucent: true,
		drawUnderNavBar: true
	}
}else{
	navigatorStyle = {
		navBarBackgroundColor: '#0a0a0a'
	}
}

MoviesList.navigatorStyle = {
	...navigatorStyle,
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarTextColor: 'white',
	navBarButtonColor: 'white'
}

MoviesList.propTypes = {
	list: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired,
	navigator: PropTypes.object
}

function mapStateToProps(state, ownProps){
	return {
		list:state.movies.list
	}
}

function mapDispatchToProps(dispatch){
	return {
	 	actions: bindActionCreators(moviesActions, dispatch)
	}	
}


export default connect(mapStateToProps, mapDispatchToProps) (MoviesList);