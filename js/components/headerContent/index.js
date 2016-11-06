'use strict';

import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Icon, View, Text, Button, InputGroup, Input } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class HeaderContent extends Component {

	navigateTo(route) {
        this.props.closeDrawer();
    }

    popRoute() {
        this.props.popRoute();
    }

	render() {
		return (
			<View style={styles.header} >
				<View style={styles.rowHeader}>
                    <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                        <Icon name='ios-menu' style={{fontSize: 32, lineHeight: 36}} />
                    </Button>

                    <Image source={require('../../../images/Header-Logo.png')} style={styles.imageHeader}>
                    </Image>

                    <Button transparent style={styles.btnHeader} onPress={() => this.popRoute()}>
                        <Icon name='ios-search' style={{fontSize: 32, lineHeight: 36}} />
                    </Button>
				</View>
			</View>
		);
	}
}

function bindAction(dispatch) {
    return {
		openDrawer: ()=>dispatch(openDrawer()),
		closeDrawer: ()=>dispatch(closeDrawer()),
        popRoute:()=>dispatch(popRoute())
    }
}

export default connect(null, bindAction)(HeaderContent);
