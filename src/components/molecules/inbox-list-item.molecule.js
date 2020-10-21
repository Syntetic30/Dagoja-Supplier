import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from '../../styles';
import colors from '../../styles/colors';

const {
    InboxStyle,
    GeneralStyle,
} = Styles.StyleSheets;

function InboxListItem(props) {
    let itemStyle = null;
    if (props.useHr === true) {
        // itemStyle.push(GeneralStyle.hr);
        itemStyle = GeneralStyle.hr;
    }
    const onItemPressed = () => {
        props.navigation.navigate('LoggedIn-Inbox', {
            screen: 'Inbox-Detail',
        });
    };
    return (
        <View style={itemStyle}>
            <TouchableOpacity
                style={InboxStyle.itemContainer}
                onPress={onItemPressed}
            >
                <View style={InboxStyle.itemIconContainer}>
                    <FontAwesomeIcon
                        icon={props.icon}
                        size={props.iconSize}
                        color={colors.WHITE_COLOR}
                    />
                </View>
                <View style={InboxStyle.itemContentContainer}>
                    <Text style={InboxStyle.itemTitleText}>{props.title}</Text>
                    <Text style={InboxStyle.itemSubtitleText}>{props.subTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

InboxListItem.propTypes = {
    icon: propTypes.any,
    iconSize: propTypes.number,
    title: propTypes.string,
    subTitle: propTypes.string,
    useHr: propTypes.bool,
    navigation: propTypes.object,
};
InboxListItem.defaultProps = {
    icon: null,
    iconSize: 23,
    title: null,
    subTitle: null,
    useHr: true,
    navigation: {},
};

export default InboxListItem;
