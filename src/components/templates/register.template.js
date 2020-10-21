import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import propTypes from 'prop-types';

import Styles from '../../styles';

import Atoms from '../atoms';
import Molecules from '../molecules';
import Organisms from '../organisms';

const {
    SocialButtonAtom,
} = Atoms;
const {
    PageTitleMolecule,
    HrWithTextMolecule,
} = Molecules;
const { FormRegisterOrganism } = Organisms;

// StyleSheets Component
const {
    LoginStyle,
    GeneralStyle,
    RegisterLinkStyle,
} = Styles.StyleSheets;

class register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleScroll = (event) => {
        if (event.nativeEvent.contentOffset.y > 70) {
            this.props.navigation.setOptions({
                headerTitle: 'Create Account',
            });
        } else {
            this.props.navigation.setOptions({ headerTitle: null });
        }
    }

    loginAction = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={ LoginStyle.container }>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onScroll={this.handleScroll}
                    keyboardShouldPersistTaps='handled'
                >
                    <View style={ LoginStyle.contentWrapper }>
                        <PageTitleMolecule
                            firstTitle='Create'
                            secondTitle='Account'
                        />
                        <FormRegisterOrganism
                        />
                        <HrWithTextMolecule
                            text='Or'
                        />
                        <SocialButtonAtom
                            type='facebook'
                            text='Login With Facebook'
                        />
                        <SocialButtonAtom
                            type='google'
                            text='Login With Google'
                        />
                    </View>
                </ScrollView>
                <View style={RegisterLinkStyle.container}>
                    <Text style={RegisterLinkStyle.text}>
                        Already have account ?
                        <Text
                            style={GeneralStyle.textLink}
                            onPress={this.loginAction}
                        >
                            {' Login '}
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
}

register.propTypes = {
    navigation: propTypes.object,
};
register.defaultProps = {
    navigation: null,
};

export default register;
