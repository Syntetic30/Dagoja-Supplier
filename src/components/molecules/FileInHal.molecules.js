import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import propTypes from 'prop-types';
import AtomsComponents from '../atoms';
import style from '../../styles';

const { FileInStyle, IconStyle } = style.StyleSheets;

const { FileInGmbAtoms, FileInTxtAtoms } = AtomsComponents;

function FileInHalMolecules(props) {
    const navigation = useNavigation();
    const onPressed = () => {
        navigation.navigate('InboxDetail');
    };
    return (
        <View style={FileInStyle.message}>
            <TouchableOpacity style={FileInStyle.container} onPress={onPressed}>
                <FileInGmbAtoms
                    style={IconStyle.IconLeft}
                    iconMail={props.iconMail}
                    sizeMail={props.sizeMail} />
                <FileInTxtAtoms
                    title={props.title}
                    describe={props.describe}/>
            </TouchableOpacity>
        </View>
    );
}

FileInHalMolecules.propTypes = {
    iconMail: propTypes.any,
    sizeMail: propTypes.number,
    describe: propTypes.string,
    title: propTypes.string,
};
FileInHalMolecules.defaultProps = {
    describe: 'We have maintenance schedule on...',
    title: 'Maintenance Schedule',
};

export default FileInHalMolecules;
