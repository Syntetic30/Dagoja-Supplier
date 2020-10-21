import React from 'react';
import { Text } from 'react-native';
import propTypes from 'prop-types';

function lostPassword(props) {
    const { ...otherProps } = props;
    return (
        <Text
            { ...otherProps }
        >
            { props.text }
        </Text>
    );
}

lostPassword.propTypes = {
    text: propTypes.string,
};
lostPassword.defaultProps = {
    text: '',
};

export default lostPassword;
