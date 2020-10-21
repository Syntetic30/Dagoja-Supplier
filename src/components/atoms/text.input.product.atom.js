import React from 'react';
import propTypes from 'prop-types';
import { TextInput } from 'react-native';
// Styles
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../styles';

// StyleSheets
const {
    ProductAddStyle,
} = Styles.StyleSheets;

function TextInputProduct(props) {
    const { ...otherProps } = props;
    return (
        <ScrollView>
            <TextInput
                style={ProductAddStyle.container}
                { ...otherProps }
            /></ScrollView>
    );
}

TextInputProduct.propTypes = {
    text: propTypes.string,
    imageSource: propTypes.any,
    icon: propTypes.any,
};
TextInputProduct.defaultProps = {
    text: null,
    imageSource: null,
    icon: null,
};

export default TextInputProduct;
