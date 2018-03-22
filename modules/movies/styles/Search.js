import {StyleSheet, Platform} from 'react-native'

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#0a0a0a'
	},
	searchBox:{
		backgroundColor: '#191919',
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginBottom: 16
	},
	searchBoxBorder:{
		borderRadius: 3,
		backgroundColor: 'white',
		paddingHorizontal: 3
	},
	textInput:{
		backgroundColor: 'white',
		...Platform.select({
			ios:{
				height: 35
			},
			android:{
				height:48
			}
		})
	},
	separator:{
		marginTop: 10,
		backgroundColor: '#8E8E8E'
	}
})

export default styles;