/* eslint-disable eol-last */
import React from 'react';
import { View } from 'react-native';
import Components from '../components';

const { TemplateComponents } = Components;
const { FileInHalTemplate, EmptyHalTemplate } = TemplateComponents;

const cardData = [
    {
        sizeMail: 25,
        title: 'Hello, How Are You Today?',
        describe: 'Now You Can Get Product Low Price',
        isRead: false,
    },
    {
        sizeMail: 25,
        title: 'Hello Guiz, Want money bag?',
        describe: 'Click me And You can get benefit',
        isRead: true,
    },
];

function FileInHalPage() {
    return (
        <View>
            {cardData.length === 0
                ? <EmptyHalTemplate />
                : <FileInHalTemplate data={cardData} />
            }
        </View>

    );
}

export default FileInHalPage;