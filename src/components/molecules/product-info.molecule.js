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
    ProductStyle,
} = Styles.StyleSheets;

function ProductInfo(props) {
    const { ...otherProps } = props;

    const onProductImagePress = () => {
        Alert.alert('Image Pressed');
    };
    return (
        <View
            style={ProductStyle.productBorder}
        >
            <View
                style={ProductStyle.productInfoContainer}
            >
                <View
                    { ...otherProps }
                    style={ProductStyle.productImageContainer}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onProductImagePress}
                    >
                        <Image
                            style={ProductStyle.productImage}
                            source={props.imageSource}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={ProductStyle.productNameContainer}
                >
                    <Text
                        style={ProductStyle.productNameText}
                    >
                        {props.fullName}
                    </Text>
                    <Text
                        style={ProductStyle.productPriceText}
                    >
                        {props.price}
                    </Text>
                    <Text
                        style={ProductStyle.productType}
                    >
                        {props.type}
                    </Text>
                    <Text
                        style={ProductStyle.productTypeText}
                    >
                        {props.accountType}
                    </Text>
                    <Text
                        style={ProductStyle.productDateText}
                    >
                        {props.date}
                    </Text>
                </View>
            </View>
        </View>
    );
}

ProductInfo.propTypes = {
    fullName: propTypes.string,
    price: propTypes.string,
    type: propTypes.string,
    accountType: propTypes.string,
    date: propTypes.string,
    imageSource: propTypes.any,
    imageHeader: propTypes.any,
};
ProductInfo.defaultProps = {
    fullName: null,
    price: null,
    type: null,
    accountType: null,
    date: null,
    imageSource: null,
    imageHeader: null,
};

export default ProductInfo;
