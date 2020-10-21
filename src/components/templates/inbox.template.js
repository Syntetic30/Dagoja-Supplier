import React from 'react';
import {
    ScrollView,
    View,
} from 'react-native';
import propTypes from 'prop-types';
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Styles from '../../styles';
import Organisms from '../organisms';

const { InboxStyle } = Styles.StyleSheets;

const {
    InboxListOrganism,
} = Organisms;

function Inbox(props) {
    return (
        <View style={InboxStyle.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <InboxListOrganism
                    data={props.data}
                    navigation={props.navigation}
                />
            </ScrollView>
        </View>
    );
}

Inbox.propTypes = {
    navigation: propTypes.object,
    data: propTypes.array,
};
Inbox.defaultProps = {
    navigation: {},
    data: [
        {
            icon: faEnvelope,
            iconSize: 15,
            title: 'Item Title',
            subTitle: 'Item Subtitle',
            isRead: false,
        },
    ],
};

export default Inbox;
