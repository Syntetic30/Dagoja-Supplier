import React from 'react';
import { View } from 'react-native';
// import propTypes from 'prop-types';
import {
    faWallet,
    faCoins,
    faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import Atoms from '../atoms';
import Styles from '../../styles';

const {
    ProfileStyle,
} = Styles.StyleSheets;

const {
    ProfileCreditIconAtom,
} = Atoms;

function ProfileCredits() {
    // const { ...otherProps } = props;
    return (
        <View
            style={ProfileStyle.profileCreditsContainer}
        >
            {/* <View
                style={ProfileStyle.profileCreditsDetailContainer}
            >
                <Text style={ProfileStyle.positionLeft}>Your Profit</Text>
                <Text style={ProfileStyle.positionRight}>Detail</Text>
            </View> */}
            <View
                style={ProfileStyle.profileCreditsIconContainer}
            >
                <ProfileCreditIconAtom
                    icon={faCreditCard}
                    iconSize={25}
                    title='Bank Account'
                    value='123123123'
                />
                <ProfileCreditIconAtom
                    icon={faWallet}
                    iconSize={25}
                    title='Profit'
                    value='Rp 1.000.000'
                />
                <ProfileCreditIconAtom
                    icon={faCoins}
                    iconSize={25}
                    title='Poin'
                    value='2000'
                />
            </View>
        </View>
    );
}

// ProfileCredits.propTypes = {
//     fullName: propTypes.string,
//     accountType: propTypes.string,
//     imageSource: propTypes.string,
// };
// ProfileCredits.defaultProps = {
//     fullName: null,
//     accountType: null,
//     imageSource: null,
// };

export default ProfileCredits;
