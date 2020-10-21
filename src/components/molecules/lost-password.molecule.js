import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';

import Atoms from '../atoms';

import Styles from '../../styles';

const { LostPasswordAtom } = Atoms;

// StyleSheets Component
const {
    LostPasswordStyle,
} = Styles.StyleSheets;

function lostPassword(props) {
    const { ...otherProps } = props;
    return (
        <View
            style={LostPasswordStyle.container}
        >
            <LostPasswordAtom
                {...otherProps}
                style={LostPasswordStyle.text}
                text={props.text}
            />
        </View>
    );
}

lostPassword.propTypes = {
    text: propTypes.string,
};
lostPassword.defaultProps = {
    text: '',
};

export default lostPassword;
