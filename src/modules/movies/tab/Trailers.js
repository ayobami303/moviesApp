import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import _ from 'lodash'

import styles from './styles/Trailers'


const Trailers = ({getTabHeight, youtubeVideos, openYoutube}) => {
	const trailers = _.take(youtubeVideos, 10);
	let computedHeight = (90 + 10) * youtubeVideos.length;
	computedHeight += 80;

	// alert(JSON.stringify(trailers))
	return (
		<View style ={styles.container} onLayout = {getTabHeight.bind(this, 'trailers', computedHeight)} >
			{
				trailers.map((item,index) => (
					<TouchableOpacity key={index} onPress={openYoutube.bind(this, `https://youtube.com/watch?v=${item.id}`)} >
						<View style={styles.thumbnailContainer}> 
							<Image source={{uri:`${item.snippet.thumbnails.medium.url}`}} style = {styles.thumbnail} />
							<Text style={styles.title} >{item.snippet.title} </Text>
						</View>
					</TouchableOpacity>
				))
			}
		</View>
	)
}

Trailers.propTypes = {
	getTabHeight: PropTypes.func.isRequired,
	openYoutube: PropTypes.func,
	youtubeVideos: PropTypes.array
}

export default Trailers;