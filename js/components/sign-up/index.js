'use strict';

import React, { Component } from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { popRoute } from '../../actions/route';

import { Container, Content, Text, Button, Icon, InputGroup, Input, View } from 'native-base';

import theme from '../login/login-theme';
import styles from './styles';

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
            pass: '',
            respuesta: '',
            error: false,
            loaded: false,
            cargando: false,
        };
        this.constructor.childContextTypes = {
            theme: React.PropTypes.object,
        }
    }

    popRoute() {
        this.props.popRoute();
    }
//      http://between2.azurewebsites.net/RestA3/ws/between/registro?correo=chris50bn@gmail.com&pass=1234&nombre=Christopher&apellido=Bonilla&tipo=1


  onRegisterPressed(){
    try {
        this.cargando= true;
        fetch("http://between2.azurewebsites.net/RestA3/ws/between/registro"+"?"+"correo="+this.state.correo+"&pass="+this.state.pass+ "&nombre="+this.state.nombre+"&apellido= "+this.state.apellidos+"&tipo=1")
        //fetch("http://between2.azurewebsites.net/RestA3/ws/between/registro?correo=chris50bn@gmail.com&pass=1234&nombre=Christopher&apellido=Bonilla&tipo=1")
            .then((response) => response.json())
            .then((responseData) => {
              this.setState({
                respuesta: responseData,
                loaded:true,
                cargando: false,
              });
            })
            console.log(respuesta);
    } catch (error) {
        this.cargando= false,
        this.error=true;
    }
  }
  renderResponse(){
    if(this.loaded==true){
      return(
        <Text style={styles.responseText}>
          {JSON.Parse(this.respuesta.respuesta)}
        </Text>
      )
    }
  }
  renderError(){
    if(this.error==true){
    return(
      <Text style={{color: 'red'}} >
          Error intentelo más tarde.
      </Text>
      )
    }
  }
  renderLoading(){
    if(this.cargando==true){
    return(
      <Text style={styles.termsText} >
          Creando Usuario...
      </Text>
      )
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
                                        _<Input placeholder='Contraseña' secureTextEntry={true}  style={styles.input}  onChangeText={(val) => this.setState({pass: val})}/>
                                    </InputGroup>

                                    <Button
                                        rounded transparent  block

                                        style={styles.signupBtn}

                                        onPress={this.onRegisterPressed.bind(this)}
                                    >
                                        Continue
                                    </Button>
                                    {this.renderLoading()}
                                    {this.renderResponse()}
                                    {this.renderError()}
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

  //onPress={}
  //onPress={this.onRegisterPressed.bind(this)}
function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(SignUp);
