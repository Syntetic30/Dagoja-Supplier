import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import propTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';
import Styles from '../../styles';
import colors from '../../styles/colors';

// StyleSheets Component
const {
    HeaderStyle,
} = Styles.StyleSheets;

function HeaderIcon(props) {
    const navigation = useNavigation();
    return (
        <View style={HeaderStyle.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Tabs-Add')}>
                <FontAwesomeIcon icon={props.icon} size={18} color={colors.GREY3_COLOR} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Tabs-Add')}>
                <FontAwesomeIcon plus={props.plus} size={18} color={colors.GREY_COLOR} />
            </TouchableOpacity> */}
        </View>

    );
}

HeaderIcon.propTypes = {
    icon: propTypes.any,
    plus: propTypes.any,
};
HeaderIcon.defaultProps = {
    icon: null,
    plus: null,
};

export default HeaderIcon;
