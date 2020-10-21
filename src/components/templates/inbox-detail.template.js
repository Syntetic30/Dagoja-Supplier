import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';
import Organisms from '../organisms';
import Atoms from '../atoms';

const { InboxDetailStyle } = Styles.StyleSheets;

const {
    InboxDetailFooterAtom,
} = Atoms;
const {
    InboxDetailContentOrganism,
} = Organisms;

function InboxDetail(props) {
    return (
        <View style={InboxDetailStyle.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <InboxDetailContentOrganism data={props.data} />
            </ScrollView>
            <InboxDetailFooterAtom>
                <View>
                    <Text>Footer</Text>
                </View>
            </InboxDetailFooterAtom>
        </View>
    );
}

InboxDetail.propTypes = {
    navigation: propTypes.object,
    data: propTypes.object,
};
InboxDetail.defaultProps = {
    navigation: null,
    data: {},
};

export default InboxDetail;
