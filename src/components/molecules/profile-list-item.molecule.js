import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import propTypes from 'prop-types';
import {
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from '../../styles';
import colors from '../../styles/colors';

const {
    ProfileStyle, GeneralStyle,
} = Styles.StyleSheets;

function ProfileItemList(props) {
    const { ...otherProps } = props;

    const onItemPressed = () => {
        Alert.alert(`Item '${props.text}'  Pressed`);
    };

    const itemStyle = [
        ProfileStyle.profileListItemTitleContainer,
    ];

    if (props.useHr === true) {
        itemStyle.push(GeneralStyle.hr);
    }

    return (
        <View style={ProfileStyle.profileListItemContainer}
            { ...otherProps }
        >
            <View
                style={ProfileStyle.profileListItemIconContainer}
            >
                <FontAwesomeIcon
                    icon={props.icon}
                    color={colors.GREY_COLOR}
                    size={props.iconSize}
                />
            </View>
            <TouchableOpacity
                activeOpacity={1}
                style={itemStyle}
                onPress={onItemPressed}
            >
                <View
                    style={ProfileStyle.profileListItemTitleTextContainer}
                >
                    <Text
                        style={ProfileStyle.profileListItemTitleText}
                    >{props.text}</Text>
                </View>
                <View>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        color={colors.GREY_COLOR}
                        size={13} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

ProfileItemList.propTypes = {
    icon: propTypes.any,
    text: propTypes.string,
    iconSize: propTypes.number,
    useHr: propTypes.bool,
};
ProfileItemList.defaultProps = {
    icon: null,
    text: null,
    iconSize: 20,
    useHr: true,
};

export default ProfileItemList;
