import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import OrganismComponents from '../organisms';

const { InfoHalOrganism } = OrganismComponents;

function InfoHalTemplate(props) {
    return (
        <View>
            <InfoHalOrganism
                data={props.data}
            />
        </View>
    );
}

InfoHalTemplate.propTypes = {
    data: propTypes.object,
};
InfoHalTemplate.defaultProps = {
    data: {},
};

export default InfoHalTemplate;
