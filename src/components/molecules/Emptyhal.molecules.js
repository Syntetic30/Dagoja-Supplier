import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import AtomsComponent from '../atoms';
import style from '../../styles';

const { EmptyStyle } = style.StyleSheets;

const { TxtEmptyAtoms, GmbEmptyAtoms } = AtomsComponent;

function EmptyHalMolecules(props) {
    return (
        <View style={EmptyStyle.empty}>
            <GmbEmptyAtoms />
            <TxtEmptyAtoms Empty={props.Empty}/>
        </View>
    );
}
EmptyHalMolecules.propTypes = {
    Empty: propTypes.string,
};
EmptyHalMolecules.defaultProps = {
    Empty: '',
};

export default EmptyHalMolecules;
