import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from '../../styles';
import Colors from '../../styles/colors';

const {
    ProductStyle,
} = Styles.StyleSheets;

function ProductInfoIcon(props) {
    return (
        <View
            style={ProductStyle.productCreditsIcon}
        >
            <View>
                <FontAwesomeIcon
                    icon={props.icon}
                    size={props.iconSize}
                    color={Colors.THEME_COLOR}
                    style={ProductStyle.productCreditsFA}
                />
            </View>
            <View
                style={ProductStyle.productCreditsIconTextContainer}
            >
                <Text
                    style={ProductStyle.productCreditsIconTitleText}
                >{props.title}</Text>
                <Text
                    style={ProductStyle.productCreditsIconValueText}
                >{props.value}</Text>
            </View>
        </View>
    );
}

ProductInfoIcon.propTypes = {
    icon: propTypes.any,
    iconSize: propTypes.number,
    title: propTypes.string,
    value: propTypes.string,
};
ProductInfoIcon.defaultProps = {
    icon: null,
    iconSize: 23,
    title: null,
    value: null,
};

export default ProductInfoIcon;
