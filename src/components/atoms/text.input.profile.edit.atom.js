import React from 'react';
import propTypes from 'prop-types';
import { TextInput } from 'react-native';
// Styles
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../styles';

// StyleSheets
const {
    ProfileStyle,
} = Styles.StyleSheets;

function TextInputProfileEdit(props) {
    const { ...otherProps } = props;
    return (
        <ScrollView>
            <TextInput
                style={ProfileStyle.container}
                { ...otherProps }
            /></ScrollView>
    );
}

TextInputProfileEdit.propTypes = {
    text: propTypes.string,
    imageSource: propTypes.any,
    icon: propTypes.any,
};
TextInputProfileEdit.defaultProps = {
    text: null,
    imageSource: null,
    icon: null,
};

export default TextInputProfileEdit;
