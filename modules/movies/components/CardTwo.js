import React, { Component } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles/CardTwo'
import {TMDB_IMG_URL} from '../../../constants/api'

const CardTwo = ({info, viewMore}) => (
	<TouchableOpacity activeOpacity={0.8} onPress = {viewMore.bind(this, info.id)} >
		<View style = {styles.cardContainer}>
			<Image source = {{uri:`${TMDB_IMG_URL}/w185/${info.poster_path}`}} style = {styles.cardImage}/>
			<View style ={styles.cardTitleContainer}>
				<Text style ={styles.cardTitle}>{info.original_title} </Text>
			</View>
		</View>
	</TouchableOpacity>
)

CardTwo.propTypes = {
	info: PropTypes.object.isRequired,
	viewMore : PropTypes.func.isRequired	
}
export default CardTwo;