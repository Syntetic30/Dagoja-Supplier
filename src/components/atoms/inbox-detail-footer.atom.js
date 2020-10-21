import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';

const {
    InboxDetailStyle,
} = Styles.StyleSheets;

function InboxDetailContent(props) {
    return (
        <View style={InboxDetailStyle.footerContainer}>
            {props.children}
        </View>
    );
}

InboxDetailContent.propTypes = {
    children: propTypes.any,
};
InboxDetailContent.defaultProps = {
    children: null,
};

export default InboxDetailContent;
