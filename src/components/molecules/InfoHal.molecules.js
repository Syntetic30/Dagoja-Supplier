import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import AtomsComponents from '../atoms';
import style from '../../styles';

const { InfoStyle } = style.StyleSheets;

const { InfoTxtAtoms, InfoGmbAtoms, InfoTxt2Atoms } = AtomsComponents;

function InfoHalMolecules(props) {
    return (
        <View style={InfoStyle.txt2}>
            <InfoGmbAtoms
                image={props.image}
                iconInfo={props.iconInfo}
                sizeInfo={props.sizeInfo}
                colorInfo={props.colorInfo}
            />
            <View style={InfoStyle.container}>
                <InfoTxtAtoms style={InfoStyle.txt1}
                    content={props.content}
                />
                <InfoTxt2Atoms
                    title={props.titleInfo}
                    date={props.dateInfo}/>
            </View>
        </View>
    );
}

InfoHalMolecules.propTypes = {
    content: propTypes.any,
    image: propTypes.any,
    titleInfo: propTypes.string,
    iconInfo: propTypes.any,
    sizeInfo: propTypes.number,
    dateInfo: propTypes.string,
    colorInfo: propTypes.any,
};
InfoHalMolecules.defaultProps = {
    content: '<p>Hai</p>',
    image: '',
    titleInfo: 'Selamat Datang',
    iconInfo: '',
    sizeInfo: '',
    dateInfo: '06-10-2020',
    colorInfo: '',
};

export default InfoHalMolecules;
