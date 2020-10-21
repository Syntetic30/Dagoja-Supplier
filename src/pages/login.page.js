import React from 'react';
import propTypes from 'prop-types';
import Components from '../components';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { LoginTemplate } = TemplateComponents;

function Login(props) {
    return (
        <>
            <LoginTemplate navigation={props.navigation}/>
        </>
    );
}

Login.propTypes = {
    navigation: propTypes.object,
};
Login.defaultProps = {
    navigation: {},
};

export default Login;
