import React from 'react';
import { View, Image } from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from '../../styles';

const { InboxDetailStyle, InfoStyle } = Styles.StyleSheets;

function InfoImgAtom(props) {
    return (
        <View>
            <Image style={InfoStyle.container} source={props.image} />
            <View style={InboxDetailStyle.headerIconContainer}>
                <FontAwesomeIcon style={InboxDetailStyle.iconContainer}
                    icon={props.iconInfo}
                    size={props.sizeInfo}
                    color={props.colorInfo}
                />
            </View>

        </View>
    );
}

InfoImgAtom.propTypes = {
    image: propTypes.any,
    iconInfo: propTypes.any,
    sizeInfo: propTypes.number,
    colorInfo: propTypes.any,

};
InfoImgAtom.defaultProps = {
    image: '',
    iconInfo: '',
    sizeInfo: '',
    colorInfo: '',
};

export default InfoImgAtom;
