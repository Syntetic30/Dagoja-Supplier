import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import {
    faPlus,
    faSearch,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

import Atoms from '../atoms';
import Styles from '../../styles';

const { HeaderIconAtom } = Atoms;

const {
    HeaderStyle,
} = Styles.StyleSheets;

function HeaderIcon(props) {
    return (
        <View style={HeaderStyle.outerContainer}>
            {
                props.type.map((x, i) => {
                    let icon;
                    switch (x) {
                    case 'search':
                        icon = faSearch;
                        break;
                    case 'plus':
                        icon = faPlus;
                        break;
                    case 'trash':
                        icon = faTrashAlt;
                        break;
                    default:
                        icon = faPlus;
                    }
                    return (
                        <HeaderIconAtom
                            key={i}
                            icon={icon}
                        />
                    );
                })
            }
        </View>
    );
}

HeaderIcon.propTypes = {
    type: propTypes.array,
};
HeaderIcon.defaultProps = {
    type: [],
};

export default HeaderIcon;
