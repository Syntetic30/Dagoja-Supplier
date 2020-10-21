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
    HomeStyle,
} = Styles.StyleSheets;

function HomeTop(props) {
    const { ...otherProps } = props;

    return (
        <View
            style={HomeStyle.homeTopContainer}
        >
            <View
                { ...otherProps }
                style={HomeStyle.homeImageContainer}
            />
            <View
                style={HomeStyle.homeNameContainer}
            >
                <Text
                    style={HomeStyle.homeName}
                >
                    {props.name}
                </Text>
                <Text
                    style={HomeStyle.homeName1Text}
                >
                    {props.name1}
                </Text>
                <Text
                    style={HomeStyle.homeNumberText}
                >
                    {props.number}
                </Text>
                <Text
                    style={HomeStyle.homeNumber1Text}
                >
                    {props.number1}
                </Text>
                <Text
                    style={HomeStyle.homeNumber2Text}
                >
                    {props.number2}
                </Text>
                <Text
                    style={HomeStyle.homeNumber3Text}
                >
                    {props.number3}
                </Text>
            </View>
        </View>
    );
}

HomeTop.propTypes = {
    name: propTypes.string,
    name1: propTypes.string,
    number: propTypes.string,
    number1: propTypes.string,
    number2: propTypes.string,
    number3: propTypes.string,
};
HomeTop.defaultProps = {
    name: null,
    name1: null,
    number: null,
    number1: null,
    number2: null,
    number3: null,
};

export default HomeTop;
