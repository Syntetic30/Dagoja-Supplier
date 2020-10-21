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

function ChangePassword(props) {
    const [password, setPassword] = useState(null);
    const [confirmationPassword, setConfirmationPassword] = useState(null);

    const handleScroll = (event) => {
        if (event.nativeEvent.contentOffset.y > 70) {
            props.navigation.setOptions({
                headerTitle: 'Change Password',
            });
        } else {
            props.navigation.setOptions({ headerTitle: null });
        }
    };

    const doneAction = () => {
        props.navigation.navigate('Initial', {
            screen: 'Login',
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
                        firstTitle='Change'
                        secondTitle='Password'
                    />
                    <View style={ForgotPasswordStyle.subTitleContainer}>
                        <Text style={ForgotPasswordStyle.subTitle}>
                            Please enter your new password!
                        </Text>
                        <Text style={ForgotPasswordStyle.description}>
                            Do not tell your new password with anyone else
                        </Text>
                    </View>
                    <View style={ ForgotPasswordFormStyle.wrapper }>
                        <View style={ ForgotPasswordFormStyle.container }>
                            <InputTextWithLabelMolecule
                                type='password'
                                title='New Password'
                                onChangeText={(value) => setPassword(value)}
                                value={ password }
                                // callback={this.getCallback.bind(this)}
                            />
                            <InputTextWithLabelMolecule
                                type='password'
                                title='Confirmation Password'
                                onChangeText={(value) => setConfirmationPassword(value)}
                                value={ confirmationPassword }
                                // callback={this.getCallback.bind(this)}
                            />
                        </View>
                        <ButtonAtom
                            type='next'
                            text='Done'
                            onPress={ doneAction }
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

ChangePassword.propTypes = {
    navigation: propTypes.object,
};
ChangePassword.defaultProps = {
    navigation: null,
};

export default ChangePassword;
