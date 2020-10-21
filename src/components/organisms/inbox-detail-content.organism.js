import propTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import {
    faPercentage,
    faInfo,
} from '@fortawesome/free-solid-svg-icons';
import Atoms from '../atoms';
import Styles from '../../styles';

// StyleSheets Component
const {
    InboxDetailStyle,
} = Styles.StyleSheets;
const {
    InboxDetailHeaderAtom,
    InboxDetailBodyAtom,
} = Atoms;

function InboxDetailContent(props) {
    let icon = faInfo;
    if (props.data) {
        if (props.data.type === 'promo') {
            icon = faPercentage;
        }
    }
    return (
        <View style={InboxDetailStyle.detailContainer}>
            <InboxDetailHeaderAtom
                icon={icon}
                image={props.data.image}
                title={props.data.title}
                date={props.data.created_at}
            />
            <InboxDetailBodyAtom
                content={props.data.content}
            />
        </View>
    );
}

InboxDetailContent.propTypes = {
    data: propTypes.object,
};
InboxDetailContent.defaultProps = {
    data: {},
};

export default InboxDetailContent;
