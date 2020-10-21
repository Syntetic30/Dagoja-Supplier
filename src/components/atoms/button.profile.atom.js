import React from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

// Styles
import Styles from '../../styles';

const {
    ProfileStyle,
} = Styles.StyleSheets;

function ButtonProfileEdit(props) {
    const { ...otherProps } = props;
    return (
        <View>
            <TouchableOpacity
                style={ProfileStyle.button}
                { ...otherProps }
            >
                <Text style={ProfileStyle.text}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>

    );
}

ButtonProfileEdit.propTypes = {
    text: propTypes.string,
};
ButtonProfileEdit.defaultProps = {
    text: '',
};

export default ButtonProfileEdit;
