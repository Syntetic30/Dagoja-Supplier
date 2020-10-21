import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';

import MoleculesComponent from '../molecules';

const { EmptyHalMolecules } = MoleculesComponent;

function EmptyHalOrganism(props) {
    return (
        <View>
            <EmptyHalMolecules Empty={props.Empty}/>
        </View>
    );
}
EmptyHalOrganism.propTypes = {
    Empty: propTypes.string,
};
EmptyHalOrganism.defaultProps = {
    Empty: 'Nothing Words',
};

export default EmptyHalOrganism;
