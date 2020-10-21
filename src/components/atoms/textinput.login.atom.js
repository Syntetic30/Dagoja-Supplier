import React from 'react';
import propTypes from 'prop-types';
import { TextInput } from 'react-native';

// Styles
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../styles';

// StyleSheets
const {
    TextInputStyles,
} = Styles.StyleSheets;

function TextInputAtom(props) {
    const { ...otherProps } = props;
    return (
        <ScrollView>
            <TextInput
                style={TextInputStyles.container}
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
