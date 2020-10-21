/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
// import Molecules from '../components/molecules';
import Pages from '../pages';
import colors from '../styles/colors';

const ForgotPasswordStack = createStackNavigator();

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ForgotPasswordStack.Navigator>
                <ForgotPasswordStack.Screen
                    name="Forgot-Email"
                    component={Pages.ForgotPasswordPage}
                    options={{
                        headerStyle: {
                            backgroundColor: colors.WHITE_COLOR,
                            shadowOpacity: 0,
                            elevation: 0,
                        },
                        headerTitleStyle: {
                            fontWeight: 'normal',
                            color: colors.GREY3_COLOR,
                            fontFamily: 'OpenSans-Medium',
                        },
                        headerTitle: null,
                    }}
                />
                <ForgotPasswordStack.Screen
                    name="Forgot-ConfirmationCode"
                    component={Pages.ConfirmationCodePage}
                    options={{
                        headerStyle: {
                            backgroundColor: colors.WHITE_COLOR,
                            shadowOpacity: 0,
                            elevation: 0,
                        },
                        headerTitleStyle: {
                            fontWeight: 'normal',
                            color: colors.GREY3_COLOR,
                            fontFamily: 'OpenSans-Medium',
                        },
                        headerTitle: null,
                    }}
                />
                <ForgotPasswordStack.Screen
                    name="Forgot-ChangePassword"
                    component={Pages.ChangePasswordPage}
                    options={{
                        headerStyle: {
                            backgroundColor: colors.WHITE_COLOR,
                            shadowOpacity: 0,
                            elevation: 0,
                        },
                        headerTitleStyle: {
                            fontWeight: 'normal',
                            color: colors.GREY3_COLOR,
                            fontFamily: 'OpenSans-Medium',
                        },
                        headerTitle: null,
                    }}
                />
            </ForgotPasswordStack.Navigator>
        );
    }
}

export default ForgotPassword;
