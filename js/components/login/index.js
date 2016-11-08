'use strict';

import React, { Component } from 'react';
import { Image, Platform, Dimensions } from 'react-native';
import { connect} from 'react-redux';

import { pushNewRoute, replaceRoute } from '../../actions/route';

import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import login from './login-theme';
import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.constructor.childContextTypes = {
            theme: React.PropTypes.object
        }
    }

    replaceRoute(route, passProps) {
        this.props.replaceRoute(route, passProps);
    }

    pushNewRoute(route, passProps) {
         this.props.pushNewRoute(route, passProps);
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
                                <Input placeholder='Nombre de Usuario' style={styles.input} onChangeText={(username) => this.setState({username})}/>
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
                                />
                            </InputGroup>

                            <Button
                                rounded primary block
                                onPress={() => this.replaceRoute('walkthrough')}
                                style={styles.loginBtn} textStyle={{fontSize: 17}}  >
                                Ingresar
                            </Button>

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
        pushNewRoute:(route, passprops) => dispatch(pushNewRoute(route, passprops))
    }
}


export default connect(null, bindActions)(Login);
