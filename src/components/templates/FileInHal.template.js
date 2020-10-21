import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import OrganismComponent from '../organisms';

const { FileInHalOrganism } = OrganismComponent;

function FileInHalTemplate(props) {
    return (
        <View>
            <FileInHalOrganism
                data={props.data}
            />
        </View>
    );
}

FileInHalTemplate.propTypes = {
    navigation: propTypes.object,
    data: propTypes.array,
};
FileInHalTemplate.defaultProps = {
    navigation: {},
    data: [
        {
            iconMails: faEnvelope,
            sizeMail: 25,
            title: 'On Template',
            describe: 'noitification on template Component',
            isRead: false,
        },
    ],
};

export default FileInHalTemplate;
