
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
        padding: 5,
        alignSelf: 'center'
    },
    headerIcons : {
        fontSize: 25
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
    input: {
        color: '#222'
    },
    header:{
      borderBottomWidth: 0.5,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: '#F9F9F9'
    },
    title:{
      alignSelf: 'center',
      fontWeight: '600'
    },
    timerWrapper:{
      backgroundColor:'#FFFFFF',
      justifyContent: 'center',
      flex: 3,
    },
    top:{
        flex: 1,
      },
    buttom:{
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff'
      },
    buttonWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 15,
        paddingBottom: 30
      },
     mainTimer: {
       fontSize: 60,
       fontWeight: '100',
       alignSelf: 'flex-end',
     },
     lapTimer: {
       fontSize: 18,
       alignSelf: 'flex-end'
     },
     timerWrapperInner: {
       alignSelf: 'center',
     },
     lapRow:{
       flexDirection: 'row',
       justifyContent: 'space-around',
       height: 40,
       paddingTop: 10,
       borderBottomWidth: 0.5,
       borderBottomColor: '#ddd'
     },
     lapNumber:{
       fontSize: 16,
       color: '#777'
     },
     lapTime:{
       color: '#000',
       fontSize: 20,
     },
     startBtn: {
       color:'#00cc00'
     },
     stopBtn:{
       color:'red',
     },
});
