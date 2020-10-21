import React from 'react';
import { StatusBar } from 'react-native';
import propTypes from 'prop-types';
import Components from '../components';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { RegisterTemplate } = TemplateComponents;

function Register(props) {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            <RegisterTemplate navigation={props.navigation} />
        </>
    );
}

Register.propTypes = {
    navigation: propTypes.object,
};
Register.defaultProps = {
    navigation: null,
};

export default Register;
