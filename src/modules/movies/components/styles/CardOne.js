import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	imageBackdrop:{		
		height: 248,
		backgroundColor: 'black'
	},
	linearGradient:{
		top: 0,
		left: 0,
		right: 0,
		height: 248,
		position: 'absolute'
	},
	cardContainer:{
		position:'absolute',
		left: 16,
		top: 32,
		right: 16,
		flexDirection: 'row'		
	},
	cardImage:{
		width: 135,
		height: 184,
		borderRadius: 3
	},
	cardDetails:{
		flex: 1,			
		paddingLeft: 10
	},
	cardTitle:{
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
	},
	cardGenre:{
		flexDirection: 'row'
	},
	cardGenreItem:{
		color: 'white',
		fontSize: 11,
		marginRight: 5
	},
	cardGenre:{
		flexDirection:'row'
	},
	cardNumbers:{
		flexDirection:'row',
		marginTop: 5
	},
	cardStar:{		
		flexDirection:'row',
	},
	cardStarRatings:{
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours:{
		fontSize: 12,
		marginLeft: 5,
	},
	cardDescription:{
		fontSize: 13,
		marginTop: 5,
		color: '#f7f7f7'
	},
	viewButton:{
		backgroundColor:'red',
		justifyContent: 'center',
		padding:10,
		width:100,
		borderRadius:3,
		height:30,
		marginTop:10,
		backgroundColor:'#ea0000'
	},
	viewButtonText:{
		color:'white'
	}
})

export default styles;