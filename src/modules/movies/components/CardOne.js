import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles/CardOne'
import {TMDB_IMG_URL} from '../../../constants/api'

const iconStar = (<Icon name = "md-star" size={16} color='#F5B642' />)

const CardOne =({info, viewMovie}) => (
	<View>
		<Image source={{uri:`${TMDB_IMG_URL}/w780/${info.backdrop_path || info.poster_path}`}} style={styles.imageBackdrop}/>
		<LinearGradient colors = {['rgba(0,0,0,0.5)','rgba(0,0,0,0.7)', 'rgba(0,0,0,0.8)']} style={styles.linearGradient}/>
		<View style ={styles.cardContainer}>
			<Image source={{uri:`${TMDB_IMG_URL}/w185/${info.poster_path}`}} style={styles.cardImage}/>
			<View style={styles.cardDetails}>
				<Text style={styles.cardTitle} numberOfLines = {2}>
					{info.original_title}
				</Text>
				<View style = {styles.cardGenre}>
					<Text style={styles.cardGenreItem}>Action</Text>
				</View>
				<View style={styles.cardNumbers}>
					<View style ={styles.cardStar} >
						{iconStar}
						<Text style = {styles.cardStarRatings} >{info.vote_average}</Text>					
					</View>
					<Text style ={styles.cardRunningHours}></Text>
				</View>
				<Text style ={styles.cardDescription} numberOfLines = {3}>
					{info.overview}
				</Text>
				<TouchableOpacity activeOpacity={0.9} style = {styles.viewButton} onPress={viewMovie.bind(this, info.id)}>
					<Text style = {styles.viewButtonText}>View Details</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
)

CardOne.propTypes = {
	info: PropTypes.object.isRequired,
	viewMovie: PropTypes.func.isRequired
}
export default CardOne;
