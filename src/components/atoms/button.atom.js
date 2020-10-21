import React from 'react';
import {
    Text,
    TouchableOpacity,
    // Alert,
} from 'react-native';
import propTypes from 'prop-types';

import Styles from '../../styles';

// StyleSheets Component
const {
    ButtonStyle,
} = Styles.StyleSheets;

function button(props) {
    const { ...otheProps } = props;
    const buttonStyle = [ButtonStyle.btn];
    const textStyle = [];

    switch (props.type) {
    case 'login':
        buttonStyle.push(ButtonStyle.btnLogin);
        textStyle.push(ButtonStyle.btnTextLogin);
        break;
    case 'register':
        buttonStyle.push(ButtonStyle.btnRegister);
        textStyle.push(ButtonStyle.btnTextRegister);
        break;
    case 'next':
        buttonStyle.push(ButtonStyle.btnNext);
        textStyle.push(ButtonStyle.btnTextNext);
        break;
    default:
        buttonStyle.push(ButtonStyle.btn);
        textStyle.push(ButtonStyle.btnText);
    }

    return (
        <TouchableOpacity
            style={buttonStyle}
            {...otheProps}
        >
            <Text style={textStyle}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

button.propTypes = {
    text: propTypes.string,
    type: propTypes.string,
};
button.defaultProps = {
    text: 'none',
    type: 'none',
};

export default button;
