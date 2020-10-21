/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from '../../styles';

const { THEME2_COLOR } = colors.ColorStyles;

function FileInGmbAtom(props) {
    return (
        <View>
            <FontAwesomeIcon
                icon={props.iconMail}
                size={props.sizeMail}
                color={THEME2_COLOR} />
            <Image source={props.pic} />
        </View>
    );
}

FileInGmbAtom.defaultProps = {
    icon: null,
    size: 23,
};

export default FileInGmbAtom;
