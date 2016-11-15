'use strict';

import React, { Component } from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { popRoute } from '../../actions/route';

import { Container, Content, Text, Button, Icon, InputGroup, Input, View } from 'native-base';

import theme from '../login/login-theme';
import styles from './styles';
var URL='http://between.azurewebsites.net/RestServer1/ws/cliente/insertUsuario';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: {
                x:0,
                y:0
            },
            nombre: '',
            apellidos: '',
            correo: '',
            contrasena: '',
        };
        this.constructor.childContextTypes = {
            theme: React.PropTypes.object,
        }
    }

    popRoute() {
        this.props.popRoute();
    }


  onRegisterPressed(){
    try {
      fetch(URL+"?" + "nombre="+this.state.nombre+" &apellido= "+this.state.apellidos+"&contrasenna="+this.state.contrasena+"&correo="+this.state.correo+"&tipo=1")
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


    render() {
        return (
            <Container>
                    <View theme={theme}>
                        <Image source={require('../../../images/BG-signUp.png')} style={styles.background} >
                            <Content padder>
                                <Text style={styles.signupHeader}>
                                    CREAR USUARIO
                                </Text>
                                <View style={styles.signupContainer}>
                                    <InputGroup borderType='rounded' style={styles.inputGrp}>
                                        <Icon name='ios-person-outline' />
                                        <Input placeholder='Nombre de Usuario'  style={styles.input} onChangeText={(val) => this.setState({nombre: val})}/>
                                    </InputGroup>

                                    <InputGroup borderType='rounded' style={styles.inputGrp}>
                                        <Icon name='ios-person-outline' />
                                        <Input placeholder='Apellido'  style={styles.input} onChangeText={(val) => this.setState({apellidos: val})}/>
                                    </InputGroup>

                                    <InputGroup borderType='rounded' style={styles.inputGrp}>
                                        <Icon name='ios-mail-open-outline' />
                                        <Input placeholder='Correo Electrónico'  style={styles.input} onChangeText={(val) => this.setState({correo: val})}/>
                                    </InputGroup>

                                    <InputGroup borderType='rounded' style={styles.inputGrp}>
                                        <Icon name='ios-unlock-outline' />
                                        <Input placeholder='Contraseña' secureTextEntry={true}  style={styles.input}  onChangeText={(val) => this.setState({contrasena: val})}/>
                                    </InputGroup>

                                    <Button
                                        rounded transparent  block
                                        //onPress={}
                                        style={styles.signupBtn}
                                        onPress={this.onRegisterPressed.bind(this)}

                                    >
                                        Continue
                                    </Button>

                                    <TouchableOpacity>
                                        <Text style={styles.termsText}>Terms & Conditions</Text>
                                    </TouchableOpacity>
                                </View>
                            </Content>
                        </Image>
                    </View>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(SignUp);
