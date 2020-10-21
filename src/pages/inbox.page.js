import propTypes from 'prop-types';
import React from 'react';
import { StatusBar } from 'react-native';
import Components from '../components';
// import Styles from '../styles';

// Component
const { TemplateComponents, MoleculeComponents } = Components;
// Templates Component
const { InboxTemplate } = TemplateComponents;
const { NoItemMolecule } = MoleculeComponents;

const itemData = [
    {
        iconSize: 15,
        title: 'Item Title',
        subTitle: 'Item Subtitle',
        isRead: false,
    },
    {
        iconSize: 15,
        title: 'Item Title 2',
        subTitle: 'Item Subtitle 2',
        isRead: true,
    },
    {
        iconSize: 15,
        title: 'Item Title 3',
        subTitle: 'Item Subtitle 3',
        isRead: true,
    },
    {
        iconSize: 15,
        title: 'Item Title 4',
        subTitle: 'Item Subtitle 4',
        isRead: true,
    },
    {
        iconSize: 15,
        title: 'Item Title 5',
        subTitle: 'Item Subtitle 5',
        isRead: false,
    },

    {
        iconSize: 15,
        title: 'Item Title 6',
        subTitle: 'Item Subtitle 6',
        isRead: false,
    },
    {
        iconSize: 15,
        title: 'Item Title 7',
        subTitle: 'Item Subtitle 7',
        isRead: true,
    },
    {
        iconSize: 15,
        title: 'Item Title 8',
        subTitle: 'Item Subtitle 8',
        isRead: true,
    },
    {
        iconSize: 15,
        title: 'Item Title 9',
        subTitle: 'Item Subtitle 9',
        isRead: true,
    },
    {
        iconSize: 15,
        title: 'Item Title 10',
        subTitle: 'Item Subtitle 10',
        isRead: false,
    },
];

function Inbox(props) {
    // useEffect(() => {
    //     console.log('pertama')
    // });
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
            {itemData.length === 0
                ? <NoItemMolecule
                    title={'No inbox for you right now :('}
                />
                : <InboxTemplate navigation={props.navigation} data={itemData} />
            }

        </>
    );
}

Inbox.propTypes = {
    navigation: propTypes.object,
};
Inbox.defaultProps = {
    navigation: null,
};

export default Inbox;
