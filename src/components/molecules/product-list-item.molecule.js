import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    // Alert,
} from 'react-native';
import propTypes from 'prop-types';
// import {
//     faChevronRight,
// } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from '../../styles';
import colors from '../../styles/colors';

const {
    ProductStyle, GeneralStyle,
} = Styles.StyleSheets;

function ProductListItem(props) {
    let itemStyle = null;
    if (props.useHr === true) {
        // itemStyle.push(GeneralStyle.hr);
        itemStyle = GeneralStyle.hr;
    }
    const onItemPressed = () => {
        props.navigation.navigate('LoggedIn-Product', {
            screen: 'Product-Detail',
        });
    };
    return (
        <View style={itemStyle}>
            <TouchableOpacity
                style={ProductStyle.itemContainer}
                onPress={onItemPressed}
            >
                <View style={ProductStyle.itemIconContainer}>
                    <FontAwesomeIcon
                        icon={props.icon}
                        size={props.iconSize}
                        color={colors.WHITE_COLOR}
                    />
                </View>
                <View style={ProductStyle.itemContentContainer}>
                    <Text style={ProductStyle.itemTitleText}>{props.title}</Text>
                    <Text style={ProductStyle.itemSubtitleText}>{props.subTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

ProductListItem.propTypes = {
    icon: propTypes.any,
    iconSize: propTypes.number,
    title: propTypes.string,
    subTitle: propTypes.string,
    useHr: propTypes.bool,
    navigation: propTypes.object,
};
ProductListItem.defaultProps = {
    icon: null,
    iconSize: 23,
    title: null,
    subTitle: null,
    useHr: true,
    navigation: {},
};

export default ProductListItem;
