import React from 'react';
import { StatusBar } from 'react-native';
import propTypes from 'prop-types';
import Components from '../components';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { ConfirmationCodeTemplate } = TemplateComponents;

function ConfirmationCode(props) {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            <ConfirmationCodeTemplate navigation={props.navigation} />
        </>
    );
}

ConfirmationCode.propTypes = {
    navigation: propTypes.object,
};
ConfirmationCode.defaultProps = {
    navigation: null,
};

export default ConfirmationCode;
