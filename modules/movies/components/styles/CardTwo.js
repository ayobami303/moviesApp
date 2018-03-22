import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	cardContainer:{
		height: 231,
		width: 135,
		backgroundColor: 'white',
		flexDirection: 'column',
		marginRight: 10,
		borderRadius: 3
	},
	cardImage:{
		height: 187,
		width: 135,

	},
	cardTitleContainer:{
		justifyContent: 'center',
		flex: 1
	},
	cardTitle:{
		color: 'black',
		textAlign: 'center',
		fontSize: 13,
		fontWeight: '500',
		paddingHorizontal: 1
	}
})

export default styles;