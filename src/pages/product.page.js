import propTypes from 'prop-types';
import React from 'react';
import { StatusBar } from 'react-native';
import Components from '../components';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { ProductTemplate } = TemplateComponents;

function Product(props) {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            <ProductTemplate navigation={props.navigation} />

        </>
    );
}

Product.propTypes = {
    navigation: propTypes.object,
};
Product.defaultProps = {
    navigation: null,
};

export default Product;
