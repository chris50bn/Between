'use strict';

import React, { Component } from 'react';
import { Image, Platform, Dimensions } from 'react-native';
import { connect} from 'react-redux';

import { pushNewRoute, replaceRoute } from '../../actions/route';

import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import login from './login-theme';
import styles from './styles';
var URL='http://between2.azurewebsites.net/RestA3/ws/between/login';

class Login extends Component {

    static propTypes = {
      setUser: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            correo: '',
            pass: '',
            cliente: '',
            error: false,
        };
        this.constructor.childContextTypes = {
            theme: React.PropTypes.object
        }
      }





      onLoginPressed(){
        fetch("http://between2.azurewebsites.net/RestA3/ws/between/login"+"?correo="+this.state.correo+"&pass="+this.state.pass)
            .then((response) => response.json())
            .then((responseData) => {
              this.setState({
                cliente:responseData.respuesta,
              });
            })
            .done();
          //  this.replaceRoute("home");
          if(this.state.cliente.respuesta){
            console.log(this.state.cliente);
            this.replaceRoute("home");
          }else{
            this.error=true;
            this.replaceRoute("home");

          }
      }

    replaceRoute(route, passProps) {
        this.props.replaceRoute(route, passProps);
    }


    pushNewRoute(route, passProps) {
         this.props.pushNewRoute(route, passProps);
        // this.setUser(this.state.username);
    }

    renderError(){
      if(this.error==true){
      return(
        <Text style={{color: 'red'}} >
            Correo y/o contraseña incorrectos.
        </Text>
        )
      }
    }

    render() {
        return (
            <Container>
                <Content theme={login}>
                    <Image source={require('../../../images/BG-signUpnew.png')} style={styles.background} >
                        <Image source={require('../../../images/B_Logo_07.png')} style={Platform.OS === 'android' ? styles.aShadow : styles.iosShadow} />
                        <View style={styles.bg}>
                            <InputGroup
                                borderType='rounded'
                                style={[styles.inputGrp, {borderWidth: 0, paddingLeft: 15}]}
                            >
                                <Icon name='ios-person-outline' />
                                <Input placeholder='Nombre de Usuario' style={styles.input} onChangeText={(val) => this.setState({correo: val})}/>
                            </InputGroup>

                            <InputGroup
                                borderType='rounded'
                                style={[styles.inputGrp, {borderWidth: 0, paddingLeft: 15}]}
                            >
                                <Icon name='ios-unlock-outline' />
                                <Input
                                    placeholder='Contraseña'
                                    secureTextEntry={true}
                                    style={styles.input}
                                    onChangeText={(val) => this.setState({pass: val})}
                                />
                            </InputGroup>

                            <Button
                                rounded primary block
                                onPress={this.onLoginPressed.bind(this)}
                                style={styles.loginBtn} textStyle={{fontSize: 17}}  >
                                Ingresar
                            </Button>
                            {this.renderError()}

                            <View style={styles.otherLinksContainer}>
                                <Grid>
                                    <Col>
                                        <Button
                                            transparent
                                            style={{alignSelf: 'flex-start'}}
                                            onPress={() => this.pushNewRoute('signUp')}
                                        >
                                            <Text style={styles.helpBtns}>
                                                Crear Usuario
                                            </Text>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            transparent
                                            style={{alignSelf: 'flex-end'}}
                                            onPress={() => this.pushNewRoute('needhelp')}
                                        >
                                            <Text style={styles.helpBtns}>
                                                ¿Ayuda?
                                            </Text>
                                        </Button>
                                    </Col>
                                </Grid>
                            </View>
                        </View>
                    </Image>
                </Content>
            </Container>
        )
    }
}





function bindActions(dispatch){
    return {
        replaceRoute:(route, passprops) => dispatch(replaceRoute(route, passprops)),
        pushNewRoute:(route, passprops) => dispatch(pushNewRoute(route, passprops)),
      //  setUser: username => dispatch(setUser(username)),
    }
}



export default connect(null, bindActions)(Login);
