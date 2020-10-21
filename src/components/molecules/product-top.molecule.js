import React from 'react';
import {
    View,
    Text,
    // Image,
    // Alert,
    // TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';

const {
    ProductStyle,
} = Styles.StyleSheets;

function ProductTop(props) {
    const { ...otherProps } = props;

    return (
        <View
            style={ProductStyle.productTopContainer}
        >
            <View
                { ...otherProps }
                style={ProductStyle.productImageContainer}
            />
            <View
                style={ProductStyle.productContainer}
            >
                <Text
                    style={ProductStyle.productName}
                >
                    {props.name}
                </Text>
                <Text
                    style={ProductStyle.productName1Text}
                >
                    {props.name1}
                </Text>
                <Text
                    style={ProductStyle.productName2Text}
                >
                    {props.name2}
                </Text>
                <Text
                    style={ProductStyle.productNumberText}
                >
                    {props.number}
                </Text>
                <Text
                    style={ProductStyle.productNumber1Text}
                >
                    {props.number1}
                </Text>
                <Text
                    style={ProductStyle.productNumber2Text}
                >
                    {props.number2}
                </Text>
            </View>
        </View>
    );
}

ProductTop.propTypes = {
    name: propTypes.string,
    name1: propTypes.string,
    name2: propTypes.string,
    number: propTypes.string,
    number1: propTypes.string,
    number2: propTypes.string,
};
ProductTop.defaultProps = {
    name: null,
    name1: null,
    name2: null,
    number: null,
    number1: null,
    number2: null,
};

export default ProductTop;
