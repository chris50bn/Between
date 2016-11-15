'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { pushNewRoute } from '../../actions/route';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Icon, Card } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import usuario from '../login/index';
import styles from './styles';

var user = require('../login/index').usuario;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state={
          nombre:'',
        };
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render(user) {
        return (
            <Container theme={theme} style={{backgroundColor: '#fff'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <HeaderContent />
                    </Header>

                    <Content>
                        <View>
                            <View>
                                <Swiper
                                    height={330}
                                    loop={true}
                                    dot={<View style={styles.swiperDot} />}
                                    activeDot={<View style={styles.swiperActiveDot}
                                    showsButtons={true} />}
                                >
                                    <TouchableOpacity  onPress={() => this.pushNewRoute('story')} style={styles.slide}   onChangeText={(nombre) => this.setState({user})}>
                                        <Image style={styles.newsPoster} source={require('../../../images/base_image.jpg')} >
                                            <View style={styles.swiperTextContent} >
                                            <Text numberOfLines={3} style={styles.newsPosterHeader}>
                                                El debate australiano consiste en que dos equipos de tres miembros discuten sobre un asunto al que se suele llamar proposición. , {usuario.username}.
                                            </Text>
                                            <Grid style={styles.swiperContentBox}>
                                                <Col style={{flexDirection:'row'}}>
                                                    <TouchableOpacity>
                                                        <Text style={styles.newsPosterLink}>SPACE.com</Text>
                                                    </TouchableOpacity>
                                                    <Icon name='ios-time-outline' style={styles.headertimeIcon} />
                                                    <Text style={styles.newsPosterLink}>20m ago</Text>
                                                </Col>
                                                <Col>
                                                    <TouchableOpacity style={styles.newsPosterTypeView}>
                                                        <Text style={styles.newsPosterTypeText}>SCIENCE</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                            </Grid>
                                        </View>
                                        </Image>
                                    </TouchableOpacity>

                                    <TouchableOpacity  onPress={() => this.pushNewRoute('story')} style={styles.slide}>
                                        <Image style={styles.newsPoster} source={require('../../../images/fachada.jpg')}>
                                            <View  style={styles.swiperTextContent}>
                                                <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                  Universidad Latina de Costa Rica, Escuela de Relaciones Internacionales.
                                                </Text>
                                                <Grid style={styles.swiperContentBox}>
                                                    <Col style={{flexDirection:'row'}}>
                                                        <TouchableOpacity>
                                                            <Text style={styles.newsPosterLink}>DEB</Text>
                                                        </TouchableOpacity>
                                                        <Icon name='ios-time-outline' style={styles.headertimeIcon} />
                                                        <Text style={styles.newsPosterLink}>Fecha: 13 de Enero del 2016</Text>
                                                    </Col>
                                                    <Col>
                                                        <TouchableOpacity style={styles.newsPosterTypeView}>
                                                            <Text style={styles.newsPosterTypeText}>ENVIRONMENT</Text>
                                                        </TouchableOpacity>
                                                    </Col>
                                                </Grid>
                                            </View>
                                        </Image>
                                    </TouchableOpacity>

                                    <TouchableOpacity  onPress={() => this.pushNewRoute('story')} style={styles.slide}>
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/4.jpg')}>
                                            <View  style={styles.swiperTextContent}>
                                                <Text numberOfLines={2} style={styles.newsPosterHeader}>

                                                </Text>
                                                <Grid style={styles.swiperContentBox}>
                                                    <Col style={{flexDirection:'row'}}>
                                                        <TouchableOpacity>
                                                            <Text style={styles.newsPosterLink}>DEB</Text>
                                                        </TouchableOpacity>
                                                        <Icon name='ios-time-outline' style={styles.headertimeIcon} />
                                                        <Text style={styles.newsPosterLink}>Fecha: 13 de Enero del 2016</Text>
                                                    </Col>
                                                    <Col>
                                                        <TouchableOpacity style={styles.newsPosterTypeView}>
                                                            <Text style={styles.newsPosterTypeText}>WORLD</Text>
                                                        </TouchableOpacity>
                                                    </Col>
                                                </Grid>
                                            </View>
                                        </Image>
                                    </TouchableOpacity>
                                </Swiper>
                            </View>
                        </View>

                        <Card style={{backgroundColor: '#fff'}}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                    Debate Trump vs Clinton.
                                    Auditorio, Universidad Latina, Sede San Pedro.
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>DEB</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Fecha: 13 de Enero, 2017</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Debate Elecciones presidenciales 2018
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>DEB</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Fecha 12 de marzo, 2017</Text>
                                        </Col>

                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Debate test
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>DEB</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Fecha 10 de junio, 2017</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>ESPN</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>12days ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>SPORTS</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>ART.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>23days ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>ART</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        There are many variations of passages of Lorem Ipsum available
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>Money.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>2months ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>FINANCE</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    </Content>
                </Image>
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

export default connect(null, bindAction)(Home);
