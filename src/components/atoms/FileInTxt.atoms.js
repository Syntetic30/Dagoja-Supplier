import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import style from '../../styles';

const { FileInStyle } = style.StyleSheets;

function FileInTxtAtoms(props) {
    return (
        <View style={FileInStyle.columns}>
            <Text style={FileInStyle.txt}>{props.title}</Text>
            <Text style={FileInStyle.txtdesk}>
                {props.describe}
            </Text>
        </View>
    );
}

FileInTxtAtoms.propTypes = {
    describe: propTypes.string,
    title: propTypes.string,
};

export default FileInTxtAtoms;
