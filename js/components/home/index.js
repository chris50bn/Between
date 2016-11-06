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
import styles from './styles';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
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
                                    <TouchableOpacity  onPress={() => this.pushNewRoute('story')} style={styles.slide}>
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/1.jpg')} >
                                            <View style={styles.swiperTextContent} >
                                            <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text.
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
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/3.jpg')}>
                                            <View  style={styles.swiperTextContent}>
                                                <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </Text>
                                                <Grid style={styles.swiperContentBox}>
                                                    <Col style={{flexDirection:'row'}}>
                                                        <TouchableOpacity>
                                                            <Text style={styles.newsPosterLink}>CDC</Text>
                                                        </TouchableOpacity>
                                                        <Icon name='ios-time-outline' style={styles.headertimeIcon} />
                                                        <Text style={styles.newsPosterLink}>2hr ago</Text>
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
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </Text>
                                                <Grid style={styles.swiperContentBox}>
                                                    <Col style={{flexDirection:'row'}}>
                                                        <TouchableOpacity>
                                                            <Text style={styles.newsPosterLink}>SKY.com</Text>
                                                        </TouchableOpacity>
                                                        <Icon name='ios-time-outline' style={styles.headertimeIcon} />
                                                        <Text style={styles.newsPosterLink}>1day ago</Text>
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
                                        Lorem Ipsum is simply dummy text of the printing
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CDC</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>1h ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>5h ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>SCIENCE</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It has survived not only five centuries
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>2days ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>WORLD</Text>
                                            </TouchableOpacity>
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
