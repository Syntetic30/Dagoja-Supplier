import React from 'react';
import {
    Image, Text, View, Alert,
} from 'react-native';
import propTypes from 'prop-types';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';
import Styles from '../styles';

const slides = [
    {
        key: 'one',
        title: 'Welcome to Dagoja Supplier',
        text: 'Manage your product',
        image: require('../assets/img/coba1.png'),
    },
    {
        key: 'two',
        title: 'Easy and Simple',
        text: 'Designed for those of you who like minimalism',
        image: require('../assets/img/coba2.png'),
    },
];

const {
    OnboardingStyle,
} = Styles.StyleSheets;

export default class Onboarding extends React.Component {
    constructor() {
        super();
        this.state = {
            show_SignIn: false,
            loading: true,
            // To show the main page of the app
        };
    }

    // state = { show_SignIn: false };

    _renderItem = ({ item }) => (
        <View style={OnboardingStyle.flex}>
            <Image source={item.image}
                style={OnboardingStyle.image}/>
            <Text
                style={OnboardingStyle.title}>
                {item.title}
            </Text>

            <Text style={OnboardingStyle.container}>
                {item.text}
            </Text>
        </View>
    );

    _onDone = async () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        const resetAction = CommonActions.reset({
            index: 1,
            routes: [
                {
                    name: 'Initial',
                },
            ],
        });
        try {
            await AsyncStorage.setItem('hasOnboarded', 'true');
            this.props.navigation.dispatch(resetAction);
            // await this.props.navigation.navigate('Initial', {
            //     screen: 'Login',
            // });
        } catch (e) {
            Alert.alert('Failed to save the data to the storage');
        }
    };

    _renderDoneButton = () => (
        <View>
            <Text style={OnboardingStyle.done}>Done</Text>
        </View>
    );

    _renderNextButton = () => (
        <View>
            <Text style={OnboardingStyle.next}>Next</Text>
        </View>
    );

    render() {
        return (
            <AppIntroSlider
                /* eslint no-underscore-dangle: 0 */
                renderItem={this._renderItem}
                data={slides}
                showSkipButton={true}
                activeDotStyle={OnboardingStyle.dot}
                onDone={this._onDone}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
            />
        );
    }
}

Onboarding.propTypes = {
    navigation: propTypes.object,
};
Onboarding.defaultProps = {
    navigation: null,
};
