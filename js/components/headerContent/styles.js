'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions, Platform } = React;

module.exports = StyleSheet.create({
	header: {
		width: Dimensions.get('window').width,
		paddingRight: 150

	},
	rowHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
		paddingTop: Platform.OS === 'android' ? 5 : 0
	},
	btnHeader: {
		paddingTop: 10
	},
	imageHeader: {
		height: 35,
		width: 105,
		resizeMode: 'contain',
		marginTop: 7
	}
});
