'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, TouchableHighlight, ListView } from 'react-native';
import { connect } from 'react-redux';

import { pushNewRoute } from '../../actions/route';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Icon, Card } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';

const REQUEST_URL = ""; //direccion webservice

class MyDebates extends Component {

    constructor(props) {
        super(props);
        this.state= {
          datasource: new ListView.datasource=({
            rowHasChanged: (row1, row2)=> row1 !== row2
          }),
          isLoaded: false;
        }
    }

    fetchData(){
      fetch(REQUEST_URL)
      .then((response)=> response.json())
      .then(responseData)=> this.setState({datasource: this.state.datasource.cloneWithRows(response.name), loaded:true} //reponse.especifico a pintar
    )
  }


    componentDidMount(){

    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    renderLoadingView(){
      return(
        <View>
          <Text>CargandoDebates</Text>
        </View>
      )
    }

    renderDebate(debate){
      <TouchableHighlight><Text>shit</Text></TouchableHighlight>

    }

    render() {
        if(!this.state.isLoaded){return this.renderLoadingView();}
        return (

        <Container theme={theme} style={{backgroundColor: '#fff'}}>
          <ListView datasource= {"name":"8150ac9ac4","id":39,"day":15,"month":10,"year":116,"position1":"85091813B6","position2":"qydc0YuS2J"}
                    renderRow ={this.renderDebate.bind(this)}/*{this.state.datasource}*//>
        </Container>
        )
    }

}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        pushNewRoute:(route) => dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(MyDebates);
