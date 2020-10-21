import propTypes from 'prop-types';
import React from 'react';
import { StatusBar } from 'react-native';
import Components from '../components';
// import Styles from '../styles';
import Assets from '../assets';

// Component
const { TemplateComponents } = Components;
// Templates Component
const { InboxDetailTemplate } = TemplateComponents;

const { Image150x150 } = Assets.ImageAssets;

function InboxDetail(props) {
    // useEffect(() => {
    //     console.log('pertama')
    // });
    const itemData = {
        title: 'Welcome to Dagoja',
        type: 'info',
        image: Image150x150,
        content: '<p>Hallooo</p>',
        created_at: '10-10-2020',
    };
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            <InboxDetailTemplate navigation={props.navigation} data={itemData} />
        </>
    );
}

InboxDetail.propTypes = {
    navigation: propTypes.object,
};
InboxDetail.defaultProps = {
    navigation: {},
};

export default InboxDetail;
