import React from 'react';
import {
    View,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import Styles from '../../styles';
import colors from '../../styles/colors';

const {
    ProfileStyle,
} = Styles.StyleSheets;

function ProfileInfo(props) {
    const { ...otherProps } = props;

    const navigation = useNavigation();

    const onProfileImagePress = () => {
        Alert.alert('Icon Pressed');
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
                    <View>
                        <FontAwesomeIcon
                            icon={faHome}
                            color={colors.GREY3_COLOR}
                            size={35} />
                    </View>
                </TouchableOpacity>
            </View>
            <View
                style={ProfileStyle.profileNameContainer}
            >
                <Text
                    style={ProfileStyle.profileNameText}
                >
                    {props.Name}
                </Text></View>
            <TouchableOpacity style={ProfileStyle.profileTypeText1} >
                <Text
                    style={ProfileStyle.profileTypeText}
                    onPress={() => navigation.navigate('ProfileEdit')}
                >
                    {props.Edit}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

ProfileInfo.propTypes = {
    Name: propTypes.string,
    Edit: propTypes.string,
};
ProfileInfo.defaultProps = {
    Name: null,
    Edit: null,
};

export default ProfileInfo;
