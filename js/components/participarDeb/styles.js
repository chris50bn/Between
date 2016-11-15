'use strict';

var React = require('react-native');
var { StyleSheet, Dimensions, Platform } = React;

var primary = require('../../themes/variable').brandPrimary;

module.exports = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        paddingLeft: 15,
        paddingRight: 15
    },
    rowHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingTop: Platform.OS === 'android' ? 7 : 0
    },
    btnHeader: {
        paddingTop: 10
    },
    imageHeader: {
        height: 25,
        width: 95,
        resizeMode: 'contain',
        marginTop: 10
    },
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: primary
    },
    contentIconsContainer: {
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50
    },
    roundedButton: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius:30,
        width: 60,
        height:60
    },
    roundedCustomButton: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:30,
        width: 60,
        height:60
    },
    feedbackHeaderContainer: {
        padding: 20,
        paddingTop: 30,
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    feedbackHeader: {
        fontSize: 22,
        paddingBottom: 10,
        fontWeight: '600',
        alignSelf: 'center'
    },
    feedbackHead: {
        opacity: 0.8,
        fontSize: 13,
        fontWeight: 'bold'
    },
    feedbackContainer: {
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 20,
        borderWidth: 0,
        paddingLeft: 25
    },
    feedbackInputBox : {
        borderBottomWidth: 1,
        borderBottomColor: Platform.OS === 'android' ? '#797979' : 'rgba(255,255,255,0.5)'
    },
    input: {
        paddingLeft: 15
    },
    inputBox: {
        alignSelf: 'flex-start'
    },
    inputBoxIcon: {
        alignSelf: 'flex-end'
    },
    forwardIcon: {
        alignSelf: 'flex-end',
        paddingBottom: 5
    },
    signupBtn: {
        height: 50,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ddd'
    },
});
