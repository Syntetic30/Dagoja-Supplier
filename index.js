/* eslint-disable class-methods-use-this */
/**
 * @format
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import Navigator from './src/navigations';
import { name as appName } from './app.json';
import store from './src/utils/store';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Navigator />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
