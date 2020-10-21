import React from 'react';
import { StatusBar } from 'react-native';
import propTypes from 'prop-types';
import Components from '../components';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { ChangePasswordTemplate } = TemplateComponents;

function ChangePassword(props) {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            <ChangePasswordTemplate navigation={props.navigation} />
        </>
    );
}

ChangePassword.propTypes = {
    navigation: propTypes.object,
};
ChangePassword.defaultProps = {
    navigation: null,
};

export default ChangePassword;
