'use strict';

import React, {Component} from 'react';
import { Image, View, TouchableOpacity, Platform, RefreshControl, TouchableWithoutFeedback, } from 'react-native';
import { connect } from 'react-redux';
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
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: this.ds.cloneWithRows(["Row 1", "Row 2"]),
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
      return()

    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        replaceRoute:(route) => dispatch(replaceRoute(route)),
    }
}

export default connect(null, bindAction)(Secciones);
