import React, { Component } from 'react';
import { AppRegistry, StyleSheet,ListView,View,Image,Text, TouchableHighlight, TouchableOpacity, Platform } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { popRoute } from '../../actions/route';
import { connect } from 'react-redux';
import TimeFormatter from 'minutes-seconds-milliseconds';

import { Container, Header, Content, Input, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import theme from '../../themes/base-theme';
import styles from './style';
var primary = require('../../themes/variable').brandPrimary;
let laps = [

];
let ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(laps),
      isRunning: false,
      mainTimer: null,
      lapTimer: null,
      mainTimerStart: null,
      lapTimerStart: null,
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

  handleStartStop(){
      let{ isRunning, firstTime, mainTimer, lapTimer } = this.state;

      if(isRunning){
        clearInterval(this.interval);
        this.setState({
          isRunning: false,
        });
        return ;
      }

      this.setState({
        mainTimerStart: new Date(),
        lapTimerStart: new Date(),
        isRunning: true,
      });

      this.interval=setInterval(() => {
        this.setState({
          mainTimer: new Date() - this.state.mainTimerStart + mainTimer,
          lapTimer: new Date() - this.state.lapTimerStart + lapTimer,
        });
      },30);
  }
/*  handleStartStop(){
    let {isRunning}=this.state;
    this.setState({
      isRunning: !isRunning
    });
  }*/

  handleLapReset(){
    let {isRunning, mainTimerStart} = this.state;
    if(mainTimerStart && !isRunning){
      laps: [],
      this.setState({
        mainTimerStart: null,
        lapTimerStart: null,
        mainTimer: 0,
        lapTimer: 0,
      })
    }
  }

  renderTimer(){
    return(
      <View style={styles.timerWrapper}>
        <View style={styles.timerWrapperInner}>
          <Text style={styles.lapTimer}>{TimeFormatter(this.state.lapTimer)}</Text>
          <Text style={styles.mainTimer}>{TimeFormatter(this.state.mainTimer)}</Text>
        </View>
      </View>
    );
  }

  renderButtons(){
    return(
      <View style={styles.buttonWrapper}>
        <TouchableHighlight underlayColor='#ddd' onPress={this.handleLapReset.bind(this)} style={styles.button}>
            <Text>{(this.mainTimerStart && !this.isRunning) ? 'Reset' : 'Lap'}</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#777' onPress={this.handleStartStop.bind(this)} style={styles.button}>
            <Text style={[styles.startBtn, this.isRunning && styles.stopBtn]}>{this.isRunning? 'Stop' : 'Start'}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  renderLaps(){
    return(
      <View style={styles.lapsWrapper}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>(
            <View style={styles.lapRow}>
                <Text style={styles.lapNumber}>{rowData.name}</Text>
                <Text style={styles.lapTime}>{rowData.value}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  render(){
    return(

        <Content>
          {this.renderHeader()}
          {this.renderTimer()}
          {this.renderButtons()}
          {this.renderLaps()}
        </Content>

    );
  }

  renderHeader() {
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
                                  <Text style={styles.headerTextIcon}>B</Text>
                              </Button>
                          </Col>

                      </Grid>
                  </Header>

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

export default connect(null, bindAction)(Cronometro);
