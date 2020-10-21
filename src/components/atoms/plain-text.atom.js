import React from 'react';
import { Text } from 'react-native';
import propTypes from 'prop-types';

import Styles from '../../styles';

// StyleSheets Component
const {
    HrStyle,
} = Styles.StyleSheets;

function plainText(props) {
    return (
        <Text
            style={ HrStyle.text }
        >
            { props.text }
        </Text>
    );
}

plainText.propTypes = {
    text: propTypes.string,
};
plainText.defaultProps = {
    text: '',
};

export default plainText;
