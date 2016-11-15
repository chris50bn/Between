'use strict';

import React, { Component } from 'react';
import { Image, View, Platform } from 'react-native';
import { connect } from 'react-redux';

import { resetRoute } from '../../actions/route';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon, InputGroup, Input } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';
var primary = require('../../themes/variable').brandPrimary;

class Participar extends Component {

  constructor(props) {
      super(props);
      this.state = {
          offset: {
             x:0,
             y:0
          },
          correo: '',
          codigo: '',
      };

      this.constructor.childContextTypes = {
          theme: React.PropTypes.object,
      }
  }

  async onRegisterPressed(){
    try {
      let response = await fetch(URL+"?" + "&correo="+this.state.correo+"&codigo=" + this.state.codigo)
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


  resetRoute(route) {
      this.props.resetRoute(route);
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
                          <Text style={styles.feedbackHeader}>Participar en un debate</Text>
                          <Text note  style={styles.feedbackHead}>Ingrese el código que recibio a su correo para participar en un debate.</Text>
                      </View>
                      <View style={styles.feedbackContainer}>
                        <InputGroup borderType='rounded' style={styles.inputGrp}>
                            <Icon name='ios-mail-outline' />
                            <Input placeholder='Email' placeholderTextColor='#fff' style={styles.input} onChangeText={(val) => this.setState({correo: val})}/>
                        </InputGroup>
                          <InputGroup borderType='rounded' style={styles.inputGrp}>
                              <Icon name='ios-mail-outline' />
                              <Input placeholder='Código' placeholderTextColor='#fff' style={styles.input} onChangeText={(val) => this.setState({codigo: val})}/>
                          </InputGroup>

                          <Button
                              rounded block transparent
                              onPress={() => this.redirect('home')}
                              style={styles.signupBtn}>
                              Enviar Correo
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
        openDrawer: () => dispatch(openDrawer()),
        resetRoute:(route) => dispatch(resetRoute(route))
    }
}

export default connect(null, bindAction)(Participar);
