import React from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';

const {
    HomeStyle,
} = Styles.StyleSheets;

function HomeInfo(props) {
    const { ...otherProps } = props;

    const onHomeImagePress = () => {
        Alert.alert('Image Pressed');
    };
    return (
        <View
            style={HomeStyle.homeBorder}
        >
            <View
                style={HomeStyle.homeInfoContainer}
            >
                <View
                    { ...otherProps }
                    style={HomeStyle.homeImageContainer}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onHomeImagePress}
                    >
                        <Image
                            style={HomeStyle.homeImage}
                            source={props.imageSource}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={HomeStyle.homeNameContainer}
                >
                    <Text
                        style={HomeStyle.homeNameText}
                    >
                        {props.fullName}
                    </Text>
                    <Text
                        style={HomeStyle.homePriceText}
                    >
                        {props.price}
                    </Text>
                    <Text
                        style={HomeStyle.homePrice1Text}
                    >
                        {props.price1}
                    </Text>
                    <Text
                        style={HomeStyle.homeType}
                    >
                        {props.type}
                    </Text>
                    <Text
                        style={HomeStyle.homeTypeText}
                    >
                        {props.accountType}
                    </Text>
                </View>
            </View>
        </View>
    );
}

HomeInfo.propTypes = {
    fullName: propTypes.string,
    price: propTypes.string,
    price1: propTypes.string,
    type: propTypes.string,
    accountType: propTypes.string,
    imageSource: propTypes.any,
    imageHeader: propTypes.any,
};
HomeInfo.defaultProps = {
    fullName: null,
    price: null,
    price1: null,
    type: null,
    accountType: null,
    imageSource: null,
    imageHeader: null,
};

export default HomeInfo;
