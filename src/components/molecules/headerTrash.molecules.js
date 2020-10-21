import React from 'react';
import { View } from 'react-native';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

import Atoms from '../atoms';

const { TrashAtoms } = Atoms;

const TrashIcon = (props) => (
    <View>
        {
            props.type.map((x, i) => {
                let icon;
                switch (x) {
                case 'trash':
                    icon = faTrashAlt;
                    break;
                default:
                    break;
                }
                return (
                    <TrashAtoms key={i}
                        icon={icon}/>
                );
            })
        }
    </View>
);

TrashIcon.propTypes = {
    type: propTypes.array,
};
TrashIcon.defaultProps = {
    type: [],
};

export default TrashIcon;
