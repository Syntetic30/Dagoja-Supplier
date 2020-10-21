import React from 'react';
import { Text } from 'react-native';
import propTypes from 'prop-types';

function inputTextLabel(props) {
    const { ...otherProps } = props;
    return (
        <Text
            {...otherProps}
        >
            { props.text }
        </Text>
    );
}
inputTextLabel.propTypes = {
    text: propTypes.string,
};

inputTextLabel.defaultProps = {
    text: '',
};

export default inputTextLabel;
