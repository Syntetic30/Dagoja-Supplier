import React from 'react';
import { StatusBar } from 'react-native';
import propTypes from 'prop-types';
import Components from '../components';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { ForgotPasswordTemplate } = TemplateComponents;

function ForgotPassword(props) {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            <ForgotPasswordTemplate navigation={props.navigation} />
        </>
    );
}

ForgotPassword.propTypes = {
    navigation: propTypes.object,
};
ForgotPassword.defaultProps = {
    navigation: null,
};

export default ForgotPassword;
