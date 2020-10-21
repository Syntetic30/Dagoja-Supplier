import React from 'react';
import { View } from 'react-native';

import Atoms from '../atoms';

import Styles from '../../styles';

const { LoadingAtom } = Atoms;

// StyleSheets Component
const {
    LoadingStyle,
} = Styles.StyleSheets;

function lostPassword(props) {
    const { ...otherProps } = props;
    return (
        <View
            style={LoadingStyle.container}
        >
            <LoadingAtom
                {...otherProps}
            />
        </View>
    );
}

export default lostPassword;
