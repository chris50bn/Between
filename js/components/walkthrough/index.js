'use strict';

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';

import { Container, Content, Text, Button, Icon, View } from 'native-base';
import Swiper from 'react-native-swiper';

import theme from '../../themes/base-theme';
console.log('theme', theme.statusBarColor);
import styles from './styles';

class Walkthrough extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Container>
                <Content theme={theme}  scrollEnabled={false}>
                    <Swiper
                        loop={false}
                        dot={<View style={styles.swiperDot} />}
                        activeDot={<View style={styles.swiperActiveDot} />}
                    >
                        <View style={styles.slides}>
                            <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                1 of 3
                            </Text>
                            <Icon name='ios-paper-outline' style={styles.imageIcons} />
                            <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Explore the latest news from your mobile device
                            </Text>
                            <Button
                                transparent rounded
                                onPress={() => this.replaceRoute('home')}
                                style={styles.Button}  >
                                Skip To App
                            </Button>
                        </View>

                        <View style={styles.slides}>
                            <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                2 of 3
                            </Text>
                            <Icon name='ios-information-circle-outline' style={styles.imageIcons} />
                            <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Lorem Ipsum industry's standard dummy text
                            </Text>
                            <Button
                                transparent rounded
                                onPress={() => this.replaceRoute('home')}
                                style={styles.Button}
                            >
                                Skip To App
                            </Button>
                        </View>

                        <View style={styles.slides}>
                            <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                3 of 3
                            </Text>
                            <Icon name='ios-volume-up-outline' style={styles.imageIcons} />
                            <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Lorem Ipsum is not simply random text
                            </Text>
                            <Button
                                transparent rounded
                                onPress={() => this.replaceRoute('home')}
                                style={styles.Button}
                            >
                                Continue To App
                            </Button>
                        </View>
                    </Swiper>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        replaceRoute:(route) => dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Walkthrough);
