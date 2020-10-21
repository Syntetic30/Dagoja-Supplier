import React from 'react';
import { View } from 'react-native';
import OrganismComponent from '../organisms';

const { EmptyHalOrganism } = OrganismComponent;

function emptyHalTemplate() {
    return (
        <View>
            <EmptyHalOrganism Empty='Nothing Notification For You Now!'/>
        </View>
    );
}

export default emptyHalTemplate;
