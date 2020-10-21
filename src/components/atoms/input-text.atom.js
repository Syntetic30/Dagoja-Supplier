import React, { Component } from 'react';
import {
    TextInput,
} from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

import Styles from '../../styles';

// StyleSheets Component
const {
    InputTextStyle,
} = Styles.StyleSheets;

class input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eyeIcon: faEye,
            hidePassword: true,
        };
    }

    setPasswordVisibility = () => {
        this.setState((prevState) => ({
            eyeIcon: prevState.eyeIcon === faEye ? faEyeSlash : faEye,
            hidePassword: !this.state.hidePassword,
        }));
    }

    // eslint-disable-next-line consistent-return
    render() {
        const { ...otherProps } = this.props;
        if (this.props.type === 'text') {
            return (
                <TextInput
                    secureTextEntry={ false }
                    autoCompleteType='off'
                    autoCorrect={ false }
                    style={ InputTextStyle.inputText }
                    {...otherProps}
                />
            );
        }
        if (this.props.type === 'password') {
            return (
                <>
                    <TextInput
                        secureTextEntry={ this.state.hidePassword }
                        autoCompleteType='off'
                        autoCorrect={ false }
                        style={ InputTextStyle.inputTextPassword }
                        {...otherProps}
                    />
                    <FontAwesomeIcon
                        icon={ this.state.eyeIcon }
                        size={ 20 }
                        color={ Styles.ColorStyles.GREY_COLOR }
                        style={ InputTextStyle.inputTextPasswordIcon }
                        onPress={ this.setPasswordVisibility }
                    />
                </>

            );
        }
    }
}

input.propTypes = {
    type: propTypes.string,
};
input.defaultProps = {
    type: 'text',
};

export default input;
