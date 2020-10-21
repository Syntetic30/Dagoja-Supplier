import propTypes from 'prop-types';
import React from 'react';
import { StatusBar } from 'react-native';
import Components from '../components';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { ProductEmptyTemplate } = TemplateComponents;

function ProductEmpty(props) {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            <ProductEmptyTemplate navigation={props.navigation} />

        </>
    );
}

ProductEmpty.propTypes = {
    navigation: propTypes.object,
};
ProductEmpty.defaultProps = {
    navigation: null,
};

export default ProductEmpty;
