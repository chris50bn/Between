'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions, Platform } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    newsContent: {
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    },
    newsHeader: {
        color: '#444',
        fontWeight: 'bold'
    },
    newsLink: {
        color: '#666',
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    newsTypeView: {
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        alignSelf: 'flex-end'
    },
    newsTypeText: {
        color: '#666',
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    newsPoster: {
        height: null,
        width: null,
        resizeMode: 'cover',
        flex: 1,
        position: 'relative'
    },
    newsPosterHeader: {
        fontWeight: '900'
    },
    newsPosterLink: {
        opacity: 0.8,
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    newsPosterTypeView: {
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        alignSelf: 'flex-end'
    },
    newsPosterTypeText: {
        opacity: 0.8,
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    timeIcon: {
        fontSize: 20,
        marginLeft: Platform.OS === 'android' ? 15 : 0,
        paddingLeft: Platform.OS === 'android' ? 0 : 20,
        paddingRight: 10,
        marginTop: Platform.OS === 'android' ? -2 : 5,
        color: '#666'
    },
    headertimeIcon: {
        fontSize: 20,
        marginLeft: Platform.OS === 'android' ? 15 : 0,
        paddingLeft: Platform.OS === 'android' ? 0 : 20,
        paddingRight: 10,
        marginTop: Platform.OS === 'android' ? -2 : 5,
        color: '#fff'
    },
    slide: {
        flex: 1,
        width: null,
        backgroundColor: 'transparent'
    },
    swiperTextContent: {
        // marginBottom: 170,
        marginTop: deviceHeight/4 + 20,
        width: deviceWidth,
        padding: 20
    },
    swiperDot: {
        backgroundColor:'rgba(0,0,0,.8)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 0
    },
    swiperActiveDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 0
    },
    swiperContentBox: {
        paddingTop: 20,
        paddingBottom: 20
    }
});
