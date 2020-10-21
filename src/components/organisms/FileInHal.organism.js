/* eslint-disable array-callback-return */

/* eslint-disable eol-last */
import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    faEnvelope,
    faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';
import MoleculesComponent from '../molecules';
import styles from '../../styles';

const { FileInHalMolecules } = MoleculesComponent;
const { FileInStyle } = styles.StyleSheets;

function EmptyFileInOrganism(props) {
    if (props.data.length !== 0) {
        props.data.map((x) => {
            if (x.isRead) {
                Object.assign(x, {
                    iconMail: faEnvelopeOpen,
                });
            }
            if (!x.isRead) {
                Object.assign(x, {
                    iconMail: faEnvelope,
                });
            }
        });
    }
    return (
        <View>
            <View style={FileInStyle.height}>
                <ScrollView >
                    {
                        props.data
                            .map((x, i) => (
                                <FileInHalMolecules
                                    key={i}
                                    iconMail={x.iconMail}
                                    sizeMail={x.sizeMail}
                                    title={x.title}
                                    describe={x.describe}
                                />
                            ))
                    }
                </ScrollView>
            </View>

        </View>
    );
}

EmptyFileInOrganism.propTypes = {
    data: propTypes.array,
};
EmptyFileInOrganism.defaultProps = {
    data: [],
};
export default EmptyFileInOrganism;