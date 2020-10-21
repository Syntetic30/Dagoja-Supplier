import propTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import {
    faEnvelope,
    faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';
import Styles from '../../styles';
import Molecules from '../molecules';

// StyleSheets Component
const {
    InboxStyle,
} = Styles.StyleSheets;
const {
    InboxListItemMolecule,
} = Molecules;

function InboxList(props) {
    if (props.data.length !== 0) {
        const lastArray = props.data.length - 1;
        // eslint-disable-next-line array-callback-return
        props.data.map((x) => {
            if (x.isRead) {
                Object.assign(x, {
                    icon: faEnvelopeOpen,
                });
            }
            if (!x.isRead) {
                Object.assign(x, {
                    icon: faEnvelope,
                });
            }
        });
        Object.assign(props.data[lastArray], {
            useHr: false,
        });
    }
    return (
        <View
            style={InboxStyle.listContainer}
        >
            {
                props.data
                    .map((x, i) => (
                        <InboxListItemMolecule
                            key={i}
                            icon={x.icon}
                            iconSize={x.iconSize}
                            title={x.title}
                            subTitle={x.subTitle}
                            useHr={x.useHr}
                            navigation={props.navigation}
                        />
                    ))
            }

        </View>
    );
}

InboxList.propTypes = {
    data: propTypes.array,
    navigation: propTypes.object,
};
InboxList.defaultProps = {
    data: [],
    navigation: {},
};

export default InboxList;
