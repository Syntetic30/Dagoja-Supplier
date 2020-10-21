import React, { Component } from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Molecules from '../components/molecules';
import Pages from '../pages';
import colors from '../styles/colors';
import LoggedInScreen from './logged-in.navigation';

const InitialStack = createStackNavigator();

class initialScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasOnboarded: false,
            loading: true,
        };
    }

    async componentDidMount() {
        await AsyncStorage.getItem('hasOnboarded').then(async (response) => {
            if (response === 'true') {
                return this.setState({
                    hasOnboarded: true,
                    loading: false,
                });
            }
            return this.setState({
                hasOnboarded: false,
                loading: false,
            });
        });
    }

    render() {
        if (this.state.loading) return <Molecules.LoadingMolecule size='large' color={colors.THEME_COLOR} />;
        return (
            <InitialStack.Navigator>
                {
                    !this.state.hasOnboarded
                    && <InitialStack.Screen
                        name="Onboarding"
                        component={Pages.OnboardingPage}
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
                }
                <InitialStack.Screen
                    name="Login"
                    component={Pages.LoginPage}
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
                <InitialStack.Screen
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
                        headerShown: false,
                    }}
                />
            </InitialStack.Navigator>
        );
    }
}

export default initialScreen;
