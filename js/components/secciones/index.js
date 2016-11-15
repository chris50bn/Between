'use strict';

import React, {Component} from 'react';
import { Image, View, TouchableOpacity, Platform, RefreshControl, TouchableWithoutFeedback, } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import CalendarPicker from 'react-native-calendar-picker';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';
var state = 0;
var REQUEST_URL = '';

class Secciones extends Component {

    constructor(props) {
        super(props);
        this.state= {
          refreshing: false,
          loaded: false,
        };
    }

  /*  componentDidMount() {
      setTimeout(
        () => this.fetchData(),
        10000
      );
     }
*/
    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            state: responseData.state,
            loaded: true,
          });
        }).catch((err) => this.showError('Error.')
      ).done();
    }


    _onRefresh() {
      this.setState({refreshing: true});
      fetchData().then(() => {
        this.setState({refreshing: false});
      });
    }


    render() {

      if(state==1){
        return (

            <Container theme={theme}>

                <Header>
                    <HeaderContent />
                </Header>
                <Content>
                    <View style={{backgroundColor: '#fff'}}>
                        <TouchableOpacity  style={{flexDirection: 'row'}} >
                            <Image source={require('../../../images/deb.jpg')} style={styles.newsImage} />
                            <View style={styles.actualContent}>
                                <Grid style={{marginTop: 25}}>
                                    <Col>
                                        <TouchableOpacity>
                                            <Text style={styles.newsHeader}>Presentación Inicial</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                                <Text numberOfLines={3} style={styles.newsLink}>
                                    El debate australiano existe una presentación inicial de los temas a tratar
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row'}} >
                            <Image source={require('../../../images/debates1.jpg')} style={styles.newsImage} />
                            <View style={styles.newsContent}>
                                <Grid style={{marginTop: 25}}>
                                    <Col>
                                        <TouchableOpacity>
                                            <Text style={styles.newsHeader}>Primeras argumentaciones</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                                <Text numberOfLines={4} style={styles.newsLink}>
                                  En el debate australiano la segunda etapa consiste en presentar las primeras argumentaciones de cada una de las partes.
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row'}}>
                            <Image source={require('../../../images/preguntas.png')} style={styles.newsImage} />
                            <View style={styles.newsContent}>
                                <Grid style={{marginTop: 25}}>
                                    <Col>
                                        <TouchableOpacity>
                                            <Text style={styles.newsHeader}>Preguntas</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                                <Text numberOfLines={3} style={styles.newsLink}>
                                    En esta parte del debate se dirigen distintas preguntas realizadas hacia cada una de las partes
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{flexDirection: 'row'}} >
                            <Image source={require('../../../images/debate2.jpg')} style={styles.newsImage} />
                            <View style={styles.newsContent}>
                                <Grid style={{marginTop: 25}}>
                                    <Col>
                                        <TouchableOpacity>
                                            <Text style={styles.newsHeader}>Nuevas argumentaciones</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                                <Text numberOfLines={3} style={styles.newsLink}>
                                    Una vez pasada la estapa de preguntas se continúa con las nuevas argumentaciones de cada posición.
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row'}}>
                            <Image source={require('../../../images/debates2.jpg')} style={styles.newsImage} />
                            <View style={styles.newsContent}>
                                <Grid style={{marginTop: 25}}>
                                    <Col>
                                        <TouchableOpacity>
                                            <Text style={styles.newsHeader}>Conclusiones</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                                <Text numberOfLines={3} style={styles.newsLink}>
                                    Por ultimo se dan las conclusiones del debate.
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
      } if (state == 2){
      return (
          <Container theme={theme}>
              <Header>
                  <HeaderContent />
              </Header>
              <Content>
                  <View style={{backgroundColor: '#fff'}}>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/deb.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Presentación Inicial</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  El debate australiano existe una presentación inicial de los temas a tratar
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debates1.jpg')} style={styles.newsImage} />
                          <View style={styles.actualContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Primeras argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={4} style={styles.newsLink}>
                                En el debate australiano la segunda etapa consiste en presentar las primeras argumentaciones de cada una de las partes.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}}>
                          <Image source={require('../../../images/preguntas.png')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Preguntas</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  En esta parte del debate se dirigen distintas preguntas realizadas hacia cada una de las partes
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debate2.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Nuevas argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Una vez pasada la estapa de preguntas se continúa con las nuevas argumentaciones de cada posición.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                          <Image source={require('../../../images/debates2.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Conclusiones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Por ultimo se dan las conclusiones del debate.
                              </Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </Content>
          </Container>
      )
    } if (state == 3){
      return (
          <Container theme={theme}>
              <Header>
                  <HeaderContent />
              </Header>
              <Content>
                  <View style={{backgroundColor: '#fff'}}>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/deb.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Presentación Inicial</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  El debate australiano existe una presentación inicial de los temas a tratar
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debates1.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Primeras argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={4} style={styles.newsLink}>
                                En el debate australiano la segunda etapa consiste en presentar las primeras argumentaciones de cada una de las partes.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}}>
                          <Image source={require('../../../images/preguntas.png')} style={styles.newsImage} />
                          <View style={styles.actualContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Preguntas</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  En esta parte del debate se dirigen distintas preguntas realizadas hacia cada una de las partes
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debate2.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Nuevas argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Una vez pasada la estapa de preguntas se continúa con las nuevas argumentaciones de cada posición.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                          <Image source={require('../../../images/debates2.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Conclusiones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Por ultimo se dan las conclusiones del debate.
                              </Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </Content>
          </Container>
      )
    } if (state == 4){
      return (
          <Container theme={theme}>
              <Header>
                  <HeaderContent />
              </Header>
              <Content>
                  <View style={{backgroundColor: '#fff'}}>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/deb.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Presentación Inicial</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  El debate australiano existe una presentación inicial de los temas a tratar
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debates1.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Primeras argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={4} style={styles.newsLink}>
                                En el debate australiano la segunda etapa consiste en presentar las primeras argumentaciones de cada una de las partes.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}}>
                          <Image source={require('../../../images/preguntas.png')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Preguntas</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  En esta parte del debate se dirigen distintas preguntas realizadas hacia cada una de las partes
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debate2.jpg')} style={styles.newsImage} />
                          <View style={styles.actualContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Nuevas argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Una vez pasada la estapa de preguntas se continúa con las nuevas argumentaciones de cada posición.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                          <Image source={require('../../../images/debates2.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Conclusiones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Por ultimo se dan las conclusiones del debate.
                              </Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </Content>
          </Container>
      )
    } if (state == 5){
      return (
          <Container theme={theme}>
              <Header>
                  <HeaderContent />
              </Header>
              <Content>
                  <View style={{backgroundColor: '#fff'}}>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/deb.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Presentación Inicial</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  El debate australiano existe una presentación inicial de los temas a tratar
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debates1.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Primeras argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={4} style={styles.newsLink}>
                                En el debate australiano la segunda etapa consiste en presentar las primeras argumentaciones de cada una de las partes.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}}>
                          <Image source={require('../../../images/preguntas.png')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Preguntas</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  En esta parte del debate se dirigen distintas preguntas realizadas hacia cada una de las partes
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debate2.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Nuevas argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Una vez pasada la estapa de preguntas se continúa con las nuevas argumentaciones de cada posición.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                          <Image source={require('../../../images/debates2.jpg')} style={styles.newsImage} />
                          <View style={styles.actualContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Conclusiones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Por ultimo se dan las conclusiones del debate.
                              </Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </Content>
          </Container>
      )
    }else{
      return (
          <Container theme={theme}>
              <Header>
                  <HeaderContent />
              </Header>
              <Content>
                  <View style={{backgroundColor: '#fff'}}>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/deb.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Presentación Inicial</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  El debate australiano existe una presentación inicial de los temas a tratar
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debates1.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Primeras argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={4} style={styles.newsLink}>
                                En el debate australiano la segunda etapa consiste en presentar las primeras argumentaciones de cada una de las partes.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}}>
                          <Image source={require('../../../images/preguntas.png')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Preguntas</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  En esta parte del debate se dirigen distintas preguntas realizadas hacia cada una de las partes
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity  style={{flexDirection: 'row'}} >
                          <Image source={require('../../../images/debate2.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Nuevas argumentaciones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Una vez pasada la estapa de preguntas se continúa con las nuevas argumentaciones de cada posición.
                              </Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                          <Image source={require('../../../images/debates2.jpg')} style={styles.newsImage} />
                          <View style={styles.newsContent}>
                              <Grid style={{marginTop: 25}}>
                                  <Col>
                                      <TouchableOpacity>
                                          <Text style={styles.newsHeader}>Conclusiones</Text>
                                      </TouchableOpacity>
                                  </Col>
                              </Grid>
                              <Text numberOfLines={3} style={styles.newsLink}>
                                  Por ultimo se dan las conclusiones del debate.
                              </Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </Content>
          </Container>
      )
    }
  }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        replaceRoute:(route) => dispatch(replaceRoute(route)),
    }
}

export default connect(null, bindAction)(Secciones);
