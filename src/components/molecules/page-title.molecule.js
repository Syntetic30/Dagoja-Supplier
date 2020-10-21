import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';

import Atoms from '../atoms';

import Styles from '../../styles';

const { PageTitleAtom } = Atoms;

// StyleSheets Component
const {
    PageTitleStyle,
} = Styles.StyleSheets;

function pageTitle(props) {
    return (
        <View
            style={PageTitleStyle.container}
        >
            <PageTitleAtom
                style={PageTitleStyle.title}
                title={props.firstTitle}
            />
            <PageTitleAtom
                style={PageTitleStyle.title}
                title={props.secondTitle}
            />
        </View>
    );
}

pageTitle.propTypes = {
    firstTitle: propTypes.string,
    secondTitle: propTypes.string,
};
pageTitle.defaultProps = {
    firstTitle: '',
    secondTitle: '',
};

export default pageTitle;
