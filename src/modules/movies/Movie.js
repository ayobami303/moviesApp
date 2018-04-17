import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, Text, ScrollView, Image, Linking, RefreshControl, ToastAndroid } from 'react-native'
import Swiper from 'react-native-swiper'
import {connect} from 'react-redux'
import { bindActionCreators } from  'redux'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'

import styles from './styles/Movie'
import {TMDB_IMG_URL, YOUTUBE_URL, YOUTUBE_API_KEY} from '../../constants/api'
import * as moviesActions from './movies.actions'
import ProgressBar from '../global/ProgressBar'
import DefaultTabBar from '../global/scrollableTabView/DefaultTabBar'
import Info from './tab/Info'
import Casts from './tab/Casts'
import Trailers from './tab/Trailers'

class Movie extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			isRefreshing: false,
			heightAnim: null,
			isLoading: true,
			youtubeVideos: [],
			showSimilarMovies: true,
			tab: 0,
			infoTabHeight: null,
			castsTabHeight: null,
			trailersTabHeight: null
		}
		this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));

	}

	componentWillMount(){
		this._retrieveDetails();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.details){	
			this.setState({isLoading: false})
		}
	}

	_onNavigatorEvent(event){
		if(event.type === 'NavBarButtonPress'){
			if (event.id === 'close') {
				this.props.navigator.dismissModal();
			}
		}
	}

	_retrieveDetails = (isRefreshed) =>{
		this.props.actions.retrieveMovieDetails(this.props.movieId)
		.then(() => {
			this._retrieveYoutubeDetails();
		});

		if (isRefreshed && this.setState({isRefreshing: false}));
	}

	_retrieveYoutubeDetails = () => {
		this.props.details.videos.results.map(item => {
			const request = axios.get(`${YOUTUBE_URL}/?id=${item.key}&key=${YOUTUBE_API_KEY}&part=snippet`)
			.then(res => {
				const data =this.state.youtubeVideos;
				data.push(res.data.items[0])
				this.setState({ youtubeVideos: data })
			})
			.catch(error => {
				console.log(error);
			})
			return request;
		})
	}

	_onScroll = (event) => {
		const contentOffsetY = event.nativeEvent.contentOffset.y.toFixed();
		if(contentOffsetY > 150){
			this._toggleNavBar('hidden')
		}else{
			this._toggleNavBar('shown')
		}
	}

	_toggleNavBar = (status) => {
		this.props.navigator.toggleNavBar({
			to: status,
			animated: true
		})
	}

	_onContentSizeChange = (width, height) => {
		if(this.state.tab === 0 && this.state.infoTabHeight === this.state.castsTabHeight){
			this.setState({ infoTabHeight: height })
		}
	}

	_onRefresh = () =>{
		this.setState({isRefreshing: true})
		this._retrieveDetails('isRefreshed');
	}

	_onChangeTab = ({i, ref}) => {
		this.setState({tab: i})
	}

	_getTabHeight = (tabName, height) => {
		if (tabName === 'casts') this.setState({ castsTabHeight: height});
		if (tabName === 'trailers') this.setState({ trailersTabHeight: height});
	}

	_openYoutube = (youtubeUrl) =>{
		Linking.canOpenURL(youtubeUrl).then(supported => {
			if (supported) {
				Linking.openURL(youtubeUrl);
			}else{
				ToastAndroid.show(`RN Don't know how to handle this url${YOUTUBE_URL}`, ToastAndroid.SHORT)
			}
		})
	}



	render() {
		const iconStar = <Icon name = "md-star" size={16} color = "#F5B642" />
		const {details} = this.props;
		const info = details

		let height;
		if (this.state.tab === 0) height = this.state.infoTabHeight;
		if (this.state.tab === 1) height = this.state.castsTabHeight;
		if (this.state.tab === 2) height = this.state.trailersTabHeight;
// alert(height)
		return (
			this.state.isLoading ? <View style={styles.progressBar} ><ProgressBar /></View> : 
			<ScrollView 
				style = {styles.container} 
				onScroll = {this._onScroll}
				scrollEventThrottle = {100}
				onContentSizeChange = {this._onContentSizeChange}
				refreshControl = {
					<RefreshControl
						refreshing={this.state.isRefreshing}
						onRefresh = {this._onRefresh}
						colors = {['#EA0000']}
						tintColor = "white"
						title = "loading..."
						titleColor = "white"
						ProgressBackgroundColor = "white"
						/>
				}
				>
				<View >
					<Swiper
						autoplay
						style = {styles.swiper}
						autoplayTimeout = {4}
						showsPagination = {false}
						height = {248}
						loop
						index={5}
						>
						{
							info.images ? info.images.backdrops.map((item, index) =>(
								<View key={index}>
									<Image source={{uri:`${TMDB_IMG_URL}/w780/${item.file_path}`}} style = {styles.imageBackdrop} />
									<LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']} style = {styles.LinearGradient} />
								</View>
								)) : <View><Text></Text></View>
						}
					</Swiper>
					<View style = {styles.cardContainer} >
						<Image source={{uri: `${TMDB_IMG_URL}/w185/${info.poster_path}`}} style={styles.cardImage} />
						<View style = {styles.cardDetails}>
							<Text style = {styles.cardTitle} >{info.original_title}</Text>
							<Text style = {styles.cardTagline} >{info.tagline}</Text>
							<View style = {styles.cardGenre} >
								{
									info.genres ? info.genres.map(
										item => (<Text key = {item.id} style ={styles.cardGenreItem} >{item.name}</Text>)) : 
									<Text></Text>
								}
							</View> 
							<View style ={styles.cardNumbers} >
								<View style = {styles.cardStar} >
									{iconStar}
									<Text style ={styles.cardStarRatings} >{info.vote_average} </Text> 
								</View>
								<Text style ={styles.cardRunningHours} />
							</View>

						</View>
					</View>
					<View style = {[styles.contentContainer, {height}]} >
						<ScrollableTabView
							onChangeTab = {this._onChangeTab}							
							renderTabBar= {()=> (
								<DefaultTabBar 
									textStyle = {styles.textStyle}
									underlineStyle = {styles.underlineStyle}
									style = {styles.tabBar}
								/>
							)}
						>
							<Info tabLabel = "INFO" info = {info} />
							<Casts tabLabel = "CASTS" info = {info} getTabHeight = {this._getTabHeight}/>
							<Trailers tabLabel = "TRAILERS" 
								youtubeVideos = {this.state.youtubeVideos} 
								openYoutube={this._openYoutube} getTabHeight ={this._getTabHeight} />
						</ScrollableTabView>
					</View>
				</View>
			</ScrollView>
		);
	}
}

Movie.navigatorStyle ={
	navBarTransparent: true,
	drawUnderNavBar: true,
	navBarTranslucent: true,
	statusBarHidden: true,
	navBarTextColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarButtonColor: 'white'
}

Movie.propTypes = {
	actions: PropTypes.object.isRequired,
	details: PropTypes.object.isRequired,
	movieId: PropTypes.number.isRequired,
	navigator: PropTypes.object
}

function mapStateToProps(state, ownProps) {
	return {
		details: state.movies.details,
	}
}

function mapDispatchToProps(dispatch) {
	return{
		actions:bindActionCreators(moviesActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);