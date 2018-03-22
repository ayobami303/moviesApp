import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: 'black',
		...Platform.select({
			ios:{
				paddingTop: 64
			}
		})
	},
	progressBar:{
		backgroundColor: 'black',
		alignItems:'center',
		justifyContent:'center',
		flex: 1
	},
	listHeading:{
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 30
	},
	listHeadingLeft:{
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	listHeadingRight:{
		color: 'white',
		...Platform.select({
			ios:{
				fontSize: 15
			},
			android:{
				fontSize: 16
			}
		})
	},
	browseList:{
		marginTop: 30,
		paddingHorizontal: 16,
		...Platform.select({
			ios:{
				marginBottom: 60
			},
			android:{
				marginBottom: 30
			}
		})
	},
	browseListItem:{
		...Platform.select({
			ios:{
				paddingVertical: 8
			},
			android:{
				paddingVertical: 10
			}
		}),
		flexDirection: 'row'
	},
	browseListItemText:{
		flex: 1,
		color: 'white',
		paddingLeft: 10,
		...Platform.select({
			ios:{
				fontSize:15,
				fontWeight:'500'
			},
			android:{
				fontSize:16,
				fontWeight:'100'
			}
		})
	}
})

export default styles;