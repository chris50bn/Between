'use strict';

var React = require('react-native');

var { StyleSheet, Platform } = React;

var primary = require('../../themes/variable').brandPrimary;

module.exports = StyleSheet.create({
    links: {
        paddingTop: Platform.OS === 'android' ? 8 : 10,
        paddingBottom: Platform.OS === 'android' ? 8 : 10,
        paddingLeft: Platform.OS === 'android' ? 0 : 10,
        borderBottomWidth: Platform.OS === 'android' ? 0 : 0,
        borderBottomColor: 'transparent'
    },
    linkText: {
        paddingLeft: 15
    },
    logoutContainer: {
        padding: 30
    },
    logoutbtn: {
        paddingTop: 30,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'rgba(236, 236, 236, 0.82)'
    },
    background: {
        flex: 1,
        width: null,
        height:null,
        backgroundColor: primary
    },
    drawerContent: {
        paddingTop: Platform.OS === 'android' ? 20 : 30
    },
    profilePic: {
        height: 40,
        width: 40, 
        borderRadius: Platform.OS === 'android' ? 40 : 20
    }
});
