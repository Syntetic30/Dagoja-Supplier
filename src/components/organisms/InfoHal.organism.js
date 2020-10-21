import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { faInfo, faPercentage } from '@fortawesome/free-solid-svg-icons';
import MoleculesComponents from '../molecules';
import style from '../../styles';

const { InfoStyle } = style.StyleSheets;
const { InfoHalMolecules } = MoleculesComponents;

function InfoHalOrganism(props) {
    let icon = faInfo;
    if (props.data) {
        if (props.data.type === 'promo') {
            icon = faPercentage;
        }
    }
    return (
        <View style={InfoStyle.height}>
            <ScrollView >
                <InfoHalMolecules
                    image={props.data.image}
                    iconInfo={icon}
                    sizeInfo={props.data.sizeInfo}
                    colorInfo={props.data.colorInfo}
                    titleInfo={props.data.titleInfo}
                    dateInfo={props.data.dateInfo}
                    content={props.data.content}
                />
            </ScrollView>
        </View>

    );
}

InfoHalOrganism.propTypes = {
    data: propTypes.object,

};
InfoHalOrganism.defaultProps = {
    data: {},
};

export default InfoHalOrganism;
