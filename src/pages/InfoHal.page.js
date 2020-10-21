/* eslint-disable eol-last */
import React from 'react';
import { View } from 'react-native';
import Components from '../components';
import Assets from '../assets';

const { Cat } = Assets.ImageAssets;
const { TemplateComponents } = Components;
const { InfoHalTemplate } = TemplateComponents;

function InfoHalPage() {
    const allItem = {
        titleInfo: 'Hai Bro/Sist',
        sizeInfo: 30,
        type: 'promo',
        content: '<p>Woi</p>',
        image: Cat,
        date: 'Test tanggal',
    };
    return (
        <View>
            <InfoHalTemplate data={allItem} />
        </View>
    );
}

export default InfoHalPage;