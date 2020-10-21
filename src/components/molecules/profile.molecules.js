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
    ProfileStyle,
} = Styles.StyleSheets;

function ProfileList(props) {
    const { ...otherProps } = props;

    const onItemPressed = () => {
        Alert.alert(`${props.text} on Maintenance`);
    };

    const itemStyle = [
        ProfileStyle.profileListItemTitleContainer,
    ];

    return (
        <View style={ProfileStyle.profileListItemContainer}
            { ...otherProps }
        ><TouchableOpacity>
                <View
                    style={ProfileStyle.profileListItemIconContainer}
                >
                    <FontAwesomeIcon
                        icon={props.icon}
                        color={colors.GREY2_COLOR}
                        size={props.iconSize}
                        onPress={onItemPressed}
                    />
                </View></TouchableOpacity>
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
                        color={colors.GREY2_COLOR}
                        size={13} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

ProfileList.propTypes = {
    icon: propTypes.any,
    text: propTypes.string,
    iconSize: propTypes.number,
};
ProfileList.defaultProps = {
    icon: null,
    text: null,
    iconSize: 20,
};

export default ProfileList;
