import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	cardContainer:{
		flex: 1,
		marginHorizontal: 16
	},
	card:{
		backgroundColor: 'white',
		borderRadius: 3,
		minHeight: 148,
		flexDirection: 'row',
		paddingRight:16,
		overflow: 'hidden'
	},
	cardImage:{
		width: 120,
		height: 163,
		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3
	},
	cardDetails:{
		paddingLeft: 10,
		flex: 1
	},
	cardTitle:{
		color: 'black',
		paddingTop: 10,
		fontSize: 13,
		fontWeight: '500'
	},
	cardNumbers:{
		flexDirection:'row',
		marginTop: 5
	},
	cardStar:{
		flexDirection: 'row'
	},
	cardStarRating:{
		fontSize: 12,
		marginLeft: 5
	},
	cardRunningHours:{
		fontSize: 12,
		marginLeft: 5
	},
	cardDescription:{
		color: '#636363',
		marginTop: 5,
		fontSize: 13
	}
})


export default styles;