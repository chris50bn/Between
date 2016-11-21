'use strict';

import React, { Component } from 'react';
import { Image, View, Platform } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';


import { Container, Header, Content, Text, Button, Icon, InputGroup, Input } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';
var primary = require('../../themes/variable').brandPrimary;

class Preguntas extends Component {

  constructor(props) {
      super(props);
      this.state = {
          offset: {
             x:0,
             y:0
          },
          equipo: '',
          pregunta: '',
      };

      this.constructor.childContextTypes = {
          theme: React.PropTypes.object,
      }
  }

  async onRegisterPressed(){
    try {
      let response = await fetch(URL+"?" + "&equipo="+this.state.equipo+"&pregunta=" + this.state.pregunta)
        .then(function(res) {
        return res.json(),
        this.redirect('home')
      })
      .then(json => callback(null, json))
      .catch(error => callback(error, null))

    } catch(error) {
        this.setState({error: error});
        console.log("error " + error);
        this.setState({showProgress: false});
    }
  }


  replaceRoute(route) {
      this.props.replaceRoute(route);
  }


  render() {
      return (
          <Container theme={theme} contentOffset={this.state.offset} scrollEnabled={false} >
              <Image source={require('../../../images/BG-signUp.png')} style={styles.container} >
              <Header>
                  <HeaderContent />
              </Header>

                  <Content>
                      <View style={styles.feedbackHeaderContainer}>
                          <Text style={styles.feedbackHeader}>Realice una pregunta</Text>
                          <Text note  style={styles.feedbackHead}>Ingrese el equipo y la pregunta que desea realizar.</Text>
                      </View>
                      <View style={styles.feedbackContainer}>
                        <InputGroup borderType='rounded' style={styles.inputGrp}>
                            <Icon name='ios-mail-outline' />
                            <Input placeholder='Equipo' placeholderTextColor='#fff' style={styles.input} onChangeText={(val) => this.setState({equipo: val})}/>
                        </InputGroup>
                          <InputGroup borderType='rounded' style={styles.inputGrp}>
                              <Icon name='ios-mail-outline' />
                              <Input placeholder='Pregunta' placeholderTextColor='#fff' style={styles.input} onChangeText={(val) => this.setState({pregunta: val})}/>
                          </InputGroup>

                          <Button
                              rounded block transparent
                              onPress={() => this.replaceRoute('home')}
                              style={styles.signupBtn}>
                              Enviar Pregunta
                          </Button>
                      </View>
                  </Content>
              </Image>
          </Container>
      )
  }
}

function bindAction(dispatch) {
    return {
        replaceRoute:(route) => dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Preguntas);
