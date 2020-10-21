/* eslint-disable import/no-duplicates */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import style from '../../styles';
import colors from '../../styles';

const { TouchStyle } = style.StyleSheets;
const { ORANGE_COLOR } = colors.ColorStyles;

function TrashIcon(props) {
    const navigation = useNavigation();
    const Trash = () => {
        navigation.navigate('EmptyHal');
    };
    return (
        <TouchableOpacity onPress={Trash} style={TouchStyle.click}>
            <FontAwesomeIcon
                icon={props.icon}
                size={17}
                color={ORANGE_COLOR}
            />
        </TouchableOpacity>
    );
}

TrashIcon.propTypes = {
    icon: propTypes.any,
};
TrashIcon.defaultProps = {
    icon: null,
};

export default TrashIcon;
