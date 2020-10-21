import React from 'react';
import { View } from 'react-native';

import Styles from '../../styles';

// StyleSheets Component
const {
    HrStyle,
} = Styles.StyleSheets;

function hr() {
    return (
        <View
            style={HrStyle.line}
        />
    );
}

export default hr;
