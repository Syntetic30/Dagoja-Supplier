import React from 'react';
import { View } from 'react-native';
import components from '../components';

const { TemplateComponents } = components;

const { EmptyHalTemplate } = TemplateComponents;

function emptyHalPages() {
    return (
        <View>
            <EmptyHalTemplate />
        </View>
    );
}

export default emptyHalPages;
