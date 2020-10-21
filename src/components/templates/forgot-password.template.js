import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import propTypes from 'prop-types';

import Styles from '../../styles';

import Atoms from '../atoms';
import Molecules from '../molecules';
// import Organisms from '../organisms';

const {
    ButtonAtom,
} = Atoms;
const {
    PageTitleMolecule,
    InputTextWithLabelMolecule,
} = Molecules;

// StyleSheets Component
const {
    ForgotPasswordStyle,
    ForgotPasswordFormStyle,
} = Styles.StyleSheets;

function ForgotPassword(props) {
    const [email, setEmail] = useState(null);

    const handleScroll = (event) => {
        if (event.nativeEvent.contentOffset.y > 70) {
            props.navigation.setOptions({
                headerTitle: 'Forgot Password',
            });
        } else {
            props.navigation.setOptions({ headerTitle: null });
        }
    };

    const nextAction = () => {
        props.navigation.navigate('Forgot', {
            screen: 'Forgot-ConfirmationCode',
        });
    };

    return (
        <View style={ ForgotPasswordStyle.container }>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                onScroll={handleScroll}
                keyboardShouldPersistTaps='handled'
            >
                <View style={ ForgotPasswordStyle.contentWrapper }>
                    <PageTitleMolecule
                        firstTitle='Forgot'
                        secondTitle='Password'
                    />
                    <View style={ForgotPasswordStyle.subTitleContainer}>
                        <Text style={ForgotPasswordStyle.subTitle}>
                            Please enter your registered email.
                        </Text>
                        <Text style={ForgotPasswordStyle.description}>
                            We will send a verification code to your registered email
                        </Text>
                    </View>
                    <View style={ ForgotPasswordFormStyle.wrapper }>
                        <View style={ ForgotPasswordFormStyle.container }>
                            <InputTextWithLabelMolecule
                                type='text'
                                title='Email'
                                onChangeText={(value) => setEmail(value)}
                                value={ email }
                                // callback={this.getCallback.bind(this)}
                            />
                        </View>
                        <ButtonAtom
                            type='next'
                            text='Next'
                            onPress={nextAction}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

ForgotPassword.propTypes = {
    navigation: propTypes.object,
};
ForgotPassword.defaultProps = {
    navigation: null,
};

export default ForgotPassword;
