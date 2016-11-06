'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';

import { pushNewRoute } from '../../actions/route';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';

class Channels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            followingBtn: true,
            popularBtn: false,
            exploreBtn: false
        };
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <HeaderContent />
                    </Header>

                    <View style={styles.bgHead}>
                        <Grid>
                            <Col>
                                <Button 
                                    transparent rounded block 
                                    style={styles.channelBtn1} 
                                    textStyle={Platform.OS === 'android' ? 
                                        {fontSize: 12,fontWeight: '900',textAlign: 'center'} : 
                                        {fontSize: 12,fontWeight: '900'}} 
                                >
                                    Following
                                </Button>
                            </Col>
                            <Col>
                                <Button 
                                    transparent rounded block 
                                    style={this.state.popularBtn === true ? 
                                        styles.channelBtn1 : styles.na} 
                                    textStyle={{fontSize: 12,fontWeight: '900',textAlign: 'center'}}
                                >
                                    Popular
                                </Button>
                            </Col>
                            <Col>
                                <Button 
                                    transparent rounded block 
                                    textStyle={{fontSize: 12,fontWeight: '900',textAlign: 'center'}}
                                >
                                    Explore
                                </Button>
                            </Col>
                        </Grid>
                    </View>

                    <Content>
                        <View>
                            <Grid>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>FASHION</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>SCIENCE</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/8.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>AUTO</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/7.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>TECHNOLOGY</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/6.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>FINANCES</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>ENVIRONMENT</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/11.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>SPORTS</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/12.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>ART</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/10.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>ANIMATION</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/13.jpg')} style={styles.channelImg}>
                                                <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>EDUCATION</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                            </Grid>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Channels);
