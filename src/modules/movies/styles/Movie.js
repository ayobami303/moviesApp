import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#0a0a0a'
	},
	progressBar:{
		backgroundColor: 'black',
		alignItems:'center',
		justifyContent:'center',
		flex: 1
	},
	swiper:{

	},
	imageBackdrop:{
		height: 248,
		backgroundColor: 'black'
	},
	linearGradient:{
		height:248,
		top: 0,
		left: 0,
		right: 0,
		position: 'absolute'
	},
	cardContainer:{
		flex: 1,
		right: 16,
		left: 16,
		top: 200,
		position: 'absolute',
		flexDirection: 'row'
	},
	cardImage:{
		height:184,
		width:135,
		borderRadius: 2
	},
	cardDetails:{
		flex:1,
		paddingLeft: 10,
		paddingTop: 50
	},
	cardTitle:{
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		padding: 10
	},
	cardTagline:{
		color: 'white',
		fontSize: 15
	},
	cardGenre:{
		flexDirection: 'row'
	},
	cardGenreItem:{
		textAlign: 'left',
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	},
	cardNumbers:{
		flexDirection: 'row'
	},
	cardStar:{
		flexDirection:'row'
	},
	cardStarRatings:{
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours:{
		marginLeft: 5,
		fontSize: 12,
	},
	contentContainer:{
		flex: 1,
		marginTop: 157
	},
	textStyle:{
		color: 'white',
		paddingTop: 10,
		fontSize: 12,
		fontWeight: '500'
	},
	underlineStyle:{
		backgroundColor: '#EA0000',
	},
	tabBar:{
		backgroundColor: '#131313',
	}
})

export default styles;