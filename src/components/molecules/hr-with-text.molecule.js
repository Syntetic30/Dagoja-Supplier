import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';

import Styles from '../../styles';

import Atoms from '../atoms';

// StyleSheets Component
const {
    HrStyle,
} = Styles.StyleSheets;

const { PlainTextAtom, HrAtom } = Atoms;

function hrWithText(props) {
    return (
        <View style={ HrStyle.container }>
            <HrAtom />
            <PlainTextAtom
                text={props.text}
            />
            <HrAtom />
        </View>
    );
}

hrWithText.propTypes = {
    text: propTypes.string,
};
hrWithText.defaultProps = {
    text: '',
};

export default hrWithText;
