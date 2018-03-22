import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles/DrawerStyles'
class Drawer extends Component{
	
	showAlert(event){
		this.toggleDrawer();
		ToastAndroid.show('Coming soon!', ToastAndroid.SHORT)
	}

	toggleDrawer(){
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated:true
		})
	}

	_goToSearch = () => {
		this.toggleDrawer();
		this.props.navigator.showModal({
			screen: 'moviesapp.Search',
			title: 'Search'
		})
	}

	_goToMovies = () => {
		this.toggleDrawer();
		this.props.navigator.popToRoot({
			screen: 'moviesapp.Movies',			
		})
	}

	render() {
		const iconSearch = (<Icon name ='md-search' size = {26} color = "#9f9f9f" style = {[styles.drawerListIcon, {paddingLeft:2}]} />);
		const iconMovies = (<Icon name = "md-film" size = {26} color = "#9f9f9f" style = {[styles.drawerListIcon, {paddingLeft:3}]} />);
		const iconTV = (<Icon name = "ios-desktop" size = {26} color = "#9f9f9f" style = {[styles.drawerListIcon, {paddingLeft:3}]} />);

		return (
			<LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)']} style = {styles.linearGradient}>
				<View style = { styles.container } >
					<View style = { styles.drawerList} >
						<TouchableOpacity onPress = {this._goToSearch} >
							<View style = { styles.drawerListItem } >
								{iconSearch}
								<Text style = {styles.drawerListItemText} >Search</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress = {this._goToMovies} >
							<View style = { styles.drawerListItem } >
								{iconMovies}
								<Text style = {styles.drawerListItemText} >Movies</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress = {(event)=> this.showAlert(event)} >
							<View style = { styles.drawerListItem } >
								{iconTV}
								<Text style = {styles.drawerListItemText} >TV Shows</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<Text style={styles._version}>{/*v1.0.0*/} </Text>
			</LinearGradient>
		);
	}
}

Drawer.propTypes ={
	navigator: PropTypes.object
};


export default (Drawer);