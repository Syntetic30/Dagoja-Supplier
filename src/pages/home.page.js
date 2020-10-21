import propTypes from 'prop-types';
import React from 'react';
import { StatusBar } from 'react-native';
import Components from '../components';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { HomeTemplate } = TemplateComponents;

function Home(props) {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            <HomeTemplate navigation={props.navigation} />

        </>
    );
}

Home.propTypes = {
    navigation: propTypes.object,
};
Home.defaultProps = {
    navigation: null,
};

export default Home;
