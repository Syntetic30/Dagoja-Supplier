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
    ProfileStyle,
} = Styles.StyleSheets;

function ProfileInfo(props) {
    const { ...otherProps } = props;

    const onProfileImagePress = () => {
        Alert.alert('Image Pressed');
    };
    return (
        <View
            style={ProfileStyle.profileInfoContainer}
        >
            <View
                { ...otherProps }
                style={ProfileStyle.profileImageContainer}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={onProfileImagePress}
                >
                    <Image
                        style={ProfileStyle.profileImage}
                        source={props.imageSource}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={ProfileStyle.profileNameContainer}
            >
                <Text
                    style={ProfileStyle.profileNameText}
                >
                    {props.fullName}
                </Text>
                <Text
                    style={ProfileStyle.profileTypeText}
                >
                    {props.accountType}
                </Text>
            </View>
        </View>
    );
}

ProfileInfo.propTypes = {
    fullName: propTypes.string,
    accountType: propTypes.string,
    imageSource: propTypes.any,
};
ProfileInfo.defaultProps = {
    fullName: null,
    accountType: null,
    imageSource: null,
};

export default ProfileInfo;
