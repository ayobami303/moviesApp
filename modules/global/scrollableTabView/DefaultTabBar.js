import React, {Component} from 'react'
import { Text, View, ViewPropTypes, StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'


class DefaultTabBar extends Component{
	
	renderTab = (name, page, isTabActive, onPressHandler) => {
		const { activeTextColor, inactiveTextColor, textStyle } = this.props;
		// const activeTextColor = 'white'
		// const inactiveTextColor = 'white'
		// const textStyle = this.props;
		// alert(JSON.stringify(textStyle))
		const textColor = isTabActive ? activeTextColor : inactiveTextColor;
		const fontWeight = isTabActive ? 'bold' : 'normal';
		return (
			<Button
				style = {{flex:1}}
				key = {name}
				accessible = {true}
				accessibilityLabel = {name}
				accessibilityTraits = 'button'
				onPress = {() => onPressHandler(page)}
			>
				<View style={[styles.tab, this.props.tabStyle, ]}>
					<Text style = {[{color: textColor, fontWeight, }, textStyle]}>{name}</Text>
				</View>
			</Button>
		)
	}

	renderTabOption (name, page){

	}

	render (){
		const containerWidth = this.props.containerWidth;
		const numberOfTabs = this.props.tabs.length;
		const tabUnderlineStyle = {
			position: 'absolute',
			width: containerWidth / numberOfTabs,
			height: 4,
			backgroundColor: 'navy',
			bottom: 0
		};
		const translateX = this.props.scrollValue.interpolate({
						inputRange: [0,1,], outputRange: [0, containerWidth / numberOfTabs]
					});	
									
		return (
			<View style = {[styles.tabs, {backgroundColor: this.props.backgroundColor}, this.props.style ]} >
				{
					this.props.tabs.map((name, page) => {
						const isTabActive = this.props.activeTab === page
						const renderTab = this. props.renderTab || this.renderTab
						return renderTab(name, page, isTabActive, this.props.goToPage)
					})
				}
				<Animated.View style={[tabUnderlineStyle, { transform:[{translateX}] }, this.props.underlineStyle]} />
			</View>
		)
	}
}

DefaultTabBar.propTypes = {
	goToPage: PropTypes.func,
	activeTab: PropTypes.number,
	tabs: PropTypes.array,
	backgroundColor: PropTypes.string,
	activeTextColor: PropTypes.string,
	inactiveTextColor: PropTypes.string,
	textStyle: Text.propTypes.style,
	tabStyle: ViewPropTypes.style,
	renderTab: PropTypes.func,
	underlineStyle: ViewPropTypes.style
}

	
DefaultTabBar.defaultProps = {		
	activeTextColor: 'navy',
	inactiveTextColor:'black',
	backgroundColor: null		
}

	


const styles = StyleSheet.create({
	tab:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 10
	},
	tabs:{
		flexDirection: 'row',
		height: 50,
		justifyContent: 'space-around',
		borderWidth: 1,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderColor: '#141414'
	}
})

export default DefaultTabBar