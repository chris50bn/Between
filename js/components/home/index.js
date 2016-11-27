'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity , ListView, AsyncStorage} from 'react-native';
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
var REQUEST_URL = 'http://between2.azurewebsites.net/RestA3/ws/between/debates';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
           dataSource: new ListView.DataSource({
             rowHasChanged: (row1, row2) => row1 !== row2,
           }),
           loaded: false,
           error: false,
         };
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    componentDidMount() {
        this.fetchData();
      }

      fetchData() {
        try{
        fetch(REQUEST_URL)
          //.then((response) => response.json())
          .then((responseData) => {
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData.debates),
              loaded: true,
            });
          })
          .done();
        }catch (error){
          error: true;
        }
      }

      renderDeb() {
        if (!this.state.loaded) {
          return this.renderLoadingView();
        }
      }

      renderError(){
          if(!this.state.error){
            return (
              <Text style={styles.newsHeader}>
                No hay debates activos :(
              </Text>
            );
          }
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
                        <ListView
                          dataSource={this.state.dataSource}
                          renderRow={this.renderDebates}
                          style={styles.listView}
                        />
                        {this.renderError()}
                    </Content>
                </Image>
            </Container>
        )
    }

    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading Debates...
          </Text>
        </View>
      );
    }

    renderDebates(debates) {
      return (
        <View style={styles.newsContent}>
          <View style={styles.rightContainer}>
            <Text numberOfLines={2} style={styles.newsHeader}>{debates.tema}</Text>
            <Text style={styles.newsLink}>{debates.fecha}</Text>
          </View>
        </View>
      );
    }


}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        pushNewRoute:(route) => dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Home);
