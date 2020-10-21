import React from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

// Styles
import Styles from '../../styles';

const {
    ProductAddStyle,
} = Styles.StyleSheets;

function ButtonAddProduct(props) {
    const { ...otherProps } = props;
    return (
        <View>
            <TouchableOpacity
                style={ProductAddStyle.button}
                { ...otherProps }
            >
                <Text>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>

    );
}

ButtonAddProduct.propTypes = {
    text: propTypes.string,
};
ButtonAddProduct.defaultProps = {
    text: '',
};

export default ButtonAddProduct;
