'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';

import { popRoute } from '../../actions/route';

import { Container, Header, Content, Text, Input, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import theme from '../../themes/base-theme';
import styles from './style';
var primary = require('../../themes/variable').brandPrimary;

class Comments extends Component {

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
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Grid style={styles.headerContainer}>
                            <Col style={styles.headerBtns}>
                                <Button transparent onPress={() => this.popRoute()}>
                                    <Icon name='ios-arrow-back' style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Icon name='ios-chatboxes-outline' style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Text style={styles.headerTextIcon}>Aa</Text>
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns} >
                                <Button transparent>
                                    <Icon name='ios-bookmarks-outline'  style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Icon name='ios-download-outline' style={styles.headerIcons} />
                                </Button>
                            </Col>
                        </Grid>
                    </Header>

                    <View style={styles.commentHeadbg}>
                        <Text style={styles.commentHeader}>23 COMMENTS</Text>
                        <Grid>
                            <Col>
                                <Button
                                    rounded primary block
                                    style={styles.channelBtn1}
                                    textStyle={Platform.OS === 'android' ?
                                        {fontSize: 12, lineHeight:15, fontWeight: '900',textAlign: 'center'} :
                                        {fontSize: 12, lineHeight:15, fontWeight: '900'}}
                                >
                                    Best
                                </Button>
                            </Col>
                            <Col>
                                <Button transparent block textStyle={{fontSize: 12,fontWeight: '900',textAlign: 'center', lineHeight:15}}>
                                    Newest
                                </Button>
                            </Col>
                            <Col>
                                <Button transparent block  textStyle={{fontSize: 12,fontWeight: '900',textAlign: 'center', lineHeight:15}}>
                                    Oldest
                                </Button>
                            </Col>
                        </Grid>
                    </View>
                    <Content>
                        <Card foregroundColor='#222' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/sanket.png')} style={Platform.OS === 'android' ? {borderRadius: 40} : {}} />
                                <Text>Kumar Sanket</Text>
                                <Icon name='ios-time-outline'  style={styles.timeIcon} />
                                <Text style={styles.date}>May 24, 11:00 AM</Text>
                                <Icon name='ios-heart-outline' style={styles.likeIcon} />
                                <Text style={styles.date}>12</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem} >
                                <Text>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </Text>
                            </CardItem>
                        </Card>

                        <Card foregroundColor='#222' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/pratik.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Kumar Pratik</Text>
                                <Icon name='ios-time-outline' style={styles.timeIcon} />
                                <Text style={styles.date}>May 24, 11:00 AM</Text>
                                <Icon name='ios-heart-outline' style={styles.likeIcon} />
                                <Text style={styles.date}>12</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    It is a long established fact that a reader will be distracted by the readable content.
                                </Text>
                            </CardItem>
                        </Card>

                        <Card foregroundColor='#222' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/saurav.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Saurav Sahu</Text>
                                <Icon name='ios-time-outline' style={styles.timeIcon} />
                                <Text style={styles.date}>Feb 17, 04:30 PM</Text>
                                <Icon name='ios-heart-outline' style={styles.likeIcon} />
                                <Text style={styles.date}>5</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    There are many variations of passages of Lorem Ipsum available.
                                </Text>
                            </CardItem>
                        </Card>

                        <Card foregroundColor='#222' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/atul.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Atul Ranjan</Text>
                                <Icon name='ios-time-outline' style={styles.timeIcon} />
                                <Text style={styles.date}>Feb 03, 01:00 PM</Text>
                                <Icon name='ios-heart-outline' style={styles.likeIcon} />
                                <Text style={styles.date}>5</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    The generated Lorem Ipsum is therefore always free from repetition
                                </Text>
                            </CardItem>
                        </Card>

                        <Card foregroundColor='#222' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/varun.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Varun Sahu</Text>
                                <Icon name='ios-time-outline' style={styles.timeIcon} />
                                <Text style={styles.date}>Jan 12, 09:30 PM</Text>
                                <Icon name='ios-heart-outline' style={styles.likeIcon} />
                                <Text style={styles.date}>4</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                     Various versions have evolved over the years, sometimes by accident
                                </Text>
                            </CardItem>
                        </Card>
                    </Content>

                    <View style={styles.commentBox}>
                        <View style={styles.attachIconContainer}>
                            <Icon name='ios-attach' style={styles.attachIcon} />
                        </View>
                        <Input placeholder='Write something...' placeholderTextColor='#797979' style={styles.input}/>
                        <TouchableOpacity style={styles.arrowForwardIconContainer}>
                            <Icon name='ios-arrow-forward'  style={styles.arrowForwardIcon} />
                        </TouchableOpacity>
                    </View>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Comments);
