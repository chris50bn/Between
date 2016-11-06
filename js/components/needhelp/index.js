'use strict';

import React, { Component } from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { popRoute } from '../../actions/route';

import { Container, Content, Text, Button, Icon, InputGroup, Input, View } from 'native-base';

import theme from '../login/login-theme';
import styles from './styles';

class NeedHelp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: {
                x:0,
                y:0
            }
        };
        this.constructor.childContextTypes = {
            theme: React.PropTypes.object,
        }
    }

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container>
                <Content contentOffset={this.state.offset} scrollEnabled={false}>
                    <View theme={theme}>
                        <Image source={require('../../../images/BG-signUp.png')} style={styles.background} >

                            <Content padder>
                                <Text style={styles.signupHeader}>
                                    Forgot Your Password?
                                </Text>
                                <View style={styles.signupContainer}>
                                    <InputGroup borderType='rounded' style={styles.inputGrp}>
                                        <Icon name='ios-mail-open-outline' />
                                        <Input placeholder='Email' style={styles.input}/>
                                    </InputGroup>

                                    <Button
                                        rounded block transparent 
                                        onPress={() => this.popRoute()}
                                        style={styles.signupBtn}
                                    >
                                        Send Email
                                    </Button>

                                    <TouchableOpacity  onPress={() => this.popRoute()}>
                                        <Text style={styles.termsText}>Back To Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </Content>
                        </Image>
                    </View>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(NeedHelp);
