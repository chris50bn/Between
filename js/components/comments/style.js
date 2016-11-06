
'use strict';

var React = require('react-native');
var { StyleSheet, Platform } = React;

var primary = require('../../themes/variable').brandPrimary;

module.exports = StyleSheet.create({
    container: {
        width: null,
        height: null,
        flex: 1
    },
    headerContainer: {
        marginTop: -5
    },
    headerBtns : {
        padding: 10,
        alignSelf: 'center'
    },
    headerIcons : {
        fontSize: 30
    },
    headerTextIcon: {
        fontSize: 28,
        paddingTop: 10,
        marginTop: Platform.OS === 'android' ? -10 : 0
    },
    commentHeadbg: {
        backgroundColor: primary,
        padding: 20
    },
    commentHeader : {
        alignSelf: 'center',
        fontWeight: '900',
        fontSize: 20,
        paddingBottom: 20
    },
    channelBtn1: {
        borderWidth: 1,
        borderColor: Platform.OS === 'android' ? '#ddd' : 'rgba(255,255,255,0.5)'
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 0
    },
    cardHeader: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        paddingBottom: 10,
        height: 65
    },
    cardItem: {
        backgroundColor: 'transparent',
        paddingTop: 5,
        paddingLeft: 50
    },
    timeIcon: {
        fontSize: 16,
        marginLeft: 15,
        marginRight: Platform.OS === 'android' ? -20 : -30,
        color: '#666',
        marginTop: Platform.OS === 'android' ? 2 : 5
    },
    date: {
        textAlign: 'right',
        fontWeight: '100',
        fontSize: 12,
        color: '#666',
        lineHeight: 16,
        marginLeft: Platform.OS === 'android' ? 10 : 0,
        // marginTop: Platform.OS === 'android' ? 5 : -5
    },
    likeIcon: {
        fontSize: 16,
        marginRight: -110,
        marginLeft: 30,
        marginTop: Platform.OS === 'android' ? 1 : 5
    },
    commentBox: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 55,
        alignItems: 'center'
    },
    attachIconContainer: {
        padding: 10,
        // paddingTop: 10
    },
    attachIcon : {
        color: '#797979',
        fontSize: 27
    },
    input: {
        color: '#222'
    },
    arrowForwardIcon: {
        alignSelf: 'flex-end',
        color: primary
    },
    arrowForwardIconContainer: {
        paddingRight: 20,
        paddingTop: 5
    }
});
