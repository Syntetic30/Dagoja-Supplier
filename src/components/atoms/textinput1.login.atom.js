import React from 'react';
import propTypes from 'prop-types';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// Styles
import Styles from '../../styles';

// StyleSheets
const {
    TextInputStyles1,
} = Styles.StyleSheets;

function TextInputAtom(props) {
    const { ...otherProps } = props;
    return (<ScrollView>
        <TextInput
            style={TextInputStyles1.container}
            { ...otherProps }
        /></ScrollView>
    );
}

TextInputAtom.propTypes = {
    text: propTypes.string,
};
TextInputAtom.defaultProps = {
    text: '',
};

export default TextInputAtom;
