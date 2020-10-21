import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faFacebookF,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';

import Styles from '../../styles';

// StyleSheets Component
const {
    SocialButtonStyle,
} = Styles.StyleSheets;

function socialButton(props) {
    const { ...otheProps } = props;
    const buttonStyle = [SocialButtonStyle.btnSocial];
    const buttonIconStyle = [SocialButtonStyle.btnSocialIcon];
    let socialIcon = null;
    let socialIconColor = 'white';
    let socialTextStyle = null;

    switch (props.type) {
    case 'google':
        buttonStyle.push(SocialButtonStyle.btnSocialGoogle);
        buttonIconStyle.push(SocialButtonStyle.btnSocialIconGoogle);
        socialIcon = faGoogle;
        socialIconColor = 'gray';
        socialTextStyle = SocialButtonStyle.btnSocialTextGoogle;
        break;
    case 'facebook':
        buttonStyle.push(SocialButtonStyle.btnSocialFacebook);
        buttonIconStyle.push(SocialButtonStyle.btnSocialIconFacebook);
        socialIcon = faFacebookF;
        socialIconColor = 'white';
        socialTextStyle = SocialButtonStyle.btnSocialTextFacebook;
        break;
    default:
        buttonStyle.push(SocialButtonStyle.btn);
        buttonIconStyle.push(SocialButtonStyle.btnText);
    }

    return (
        <View style={SocialButtonStyle.container}>
            <TouchableOpacity style={buttonStyle}
                {...otheProps}
            >
                <View style={buttonIconStyle} >
                    <FontAwesomeIcon icon={socialIcon} size={20} color={socialIconColor} />
                </View>
                <View style={SocialButtonStyle.btnSocialTextContainer}>
                    <Text style={socialTextStyle}>
                        {props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

socialButton.propTypes = {
    text: propTypes.string,
    type: propTypes.string,
};
socialButton.defaultProps = {
    text: 'none',
    type: 'none',
};

export default socialButton;
