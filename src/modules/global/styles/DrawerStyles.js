import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container:{
		flex: 1,
		paddingLeft: 25,
		justifyContent: 'center'
	},
	drawerList:{

	},
	drawerListIcon:{
		width: 27
	},
	drawerListItem:{
		marginBottom: 23,
		flexDirection: 'row',
		alignItems: 'center'
	},
	drawerListItemText:{
		color: 'white',
		fontWeight: 'bold',
		fontSize: 23,
		paddingLeft:15,
		flex:1
	},
	linearGradient:{
		flex: 1
	},
	_version:{
		color: '#3c3c3c',
		position: 'absolute',
		bottom: 25,
		marginLeft:53
	}
})

export default styles;