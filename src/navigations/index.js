/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
// import Pages from '../pages';
import InitialScreen from './initial-screen.navigation';
import ForgotPasswordScreen from './forgot-password.navigation';
import LoggedInScreen from './logged-in.navigation';

const RootStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

class Navigator extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator headerMode={'none'}>
                    <RootStack.Screen
                        name="Initial"
                        component={InitialScreen}
                        options={{
                            headerStyle: {
                                backgroundColor: colors.WHITE_COLOR,
                                shadowOpacity: 0,
                                elevation: 0,
                            },
                            headerTitleStyle: {
                                fontWeight: 'normal',
                                color: colors.GREY3_COLOR,
                            },
                            headerTitle: null,
                            // headerShown: true,
                        }}
                    />
                    <RootStack.Screen
                        name="Forgot"
                        component={ForgotPasswordScreen}
                        options={{
                            headerStyle: {
                                backgroundColor: colors.WHITE_COLOR,
                                shadowOpacity: 0,
                                elevation: 0,
                            },
                            headerTitleStyle: {
                                fontWeight: 'normal',
                                color: colors.GREY3_COLOR,
                            },
                            headerTitle: null,
                            // headerShown: true,
                        }}
                    />
                    <RootStack.Screen
                        name="LoggedIn"
                        component={LoggedInScreen}
                        options={{
                            headerStyle: {
                                backgroundColor: colors.WHITE_COLOR,
                                shadowOpacity: 0,
                                elevation: 0,
                            },
                            headerTitleStyle: {
                                fontWeight: 'normal',
                                color: colors.GREY3_COLOR,
                            },
                            headerTitle: null,
                            // headerShown: true,
                        }}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;
