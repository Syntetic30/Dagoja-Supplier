import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import style from '../../styles';

const { InfoStyle } = style.StyleSheets;

function InfoTxt2Atom(props) {
    return (
        <View>
            <Text style={InfoStyle.txt}>
                {props.title}
            </Text>
            <Text style={InfoStyle.txt1}>
                {props.date}
            </Text>
        </View>
    );
}

InfoTxt2Atom.propTypes = {
    title: propTypes.string,
    date: propTypes.string,
};
InfoTxt2Atom.defaultProps = {
    title: '',
    date: '',
};

export default InfoTxt2Atom;
