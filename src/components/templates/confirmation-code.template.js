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

function ConfirmationCode(props) {
    const [confirmationCode, setConfirmationCode] = useState(null);

    const handleScroll = (event) => {
        if (event.nativeEvent.contentOffset.y > 70) {
            props.navigation.setOptions({
                headerTitle: 'Confirmation Code',
            });
        } else {
            props.navigation.setOptions({ headerTitle: null });
        }
    };

    const nextAction = () => {
        props.navigation.navigate('Forgot', {
            screen: 'Forgot-ChangePassword',
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
                        firstTitle='Confirmation'
                        secondTitle='Code'
                    />
                    <View style={ForgotPasswordStyle.subTitleContainer}>
                        <Text style={ForgotPasswordStyle.subTitle}>
                            Please enter your confirmation code!
                        </Text>
                        <Text style={ForgotPasswordStyle.description}>
                            We have sent a confirmation code to your email.
                        </Text>
                    </View>
                    <View style={ ForgotPasswordFormStyle.wrapper }>
                        <View style={ ForgotPasswordFormStyle.container }>
                            <InputTextWithLabelMolecule
                                type='password'
                                title='Confirmation Code'
                                onChangeText={(value) => setConfirmationCode(value)}
                                value={ confirmationCode }
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

ConfirmationCode.propTypes = {
    navigation: propTypes.object,
};
ConfirmationCode.defaultProps = {
    navigation: null,
};

export default ConfirmationCode;
