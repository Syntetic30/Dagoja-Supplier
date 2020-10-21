import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';
import propTypes from 'prop-types';
import {
    // faList,
    faUser,
    faCreditCard,
    faSignOutAlt,
    faHeadset,
    faGlobe, faHome,

} from '@fortawesome/free-solid-svg-icons';
import Styles from '../../styles';

// import Atoms from '../atoms';
import Molecules from '../molecules';
// import Organisms from '../organisms';
// style={ProfileStyle.container}

const { ProfileStyle } = Styles.StyleSheets;

const {
    ProfileListMolecules,
    ProfileInfoMolecules,
    // NavBarBottomMolecules,
} = Molecules;

function Profile() {
    return (
        <View >
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    {/* Profile Section */}
                    <View style={ProfileStyle.profileSection}>
                        <ProfileInfoMolecules
                            Name='Toko Jaya Abadi TBK'
                            Edit='Edit Profile'
                            icon={faHome}
                        />
                    </View>
                    <View
                        style={ProfileStyle.profileEditWrapper}
                    />
                    {/* Options Section */}
                    <View style={ProfileStyle.profileListSection}>
                        <View
                            style={ProfileStyle.profileListWrapper}
                        >
                            <View style={ProfileStyle.profileListTitleContainer}>
                                <Text style={ProfileStyle.profileListTitleText}>Personal</Text>
                            </View>
                            <View
                                style={ProfileStyle.profileListContainer}
                            >
                                <ProfileListMolecules
                                    icon={faUser}
                                    text='Personal Data'
                                    iconSize={15}
                                />
                                <ProfileListMolecules
                                    icon={faCreditCard}
                                    text='Bank Account Information'
                                    iconSize={15}
                                />
                            </View>
                        </View>
                        <View
                            style={ProfileStyle.profileEditWrapper}
                        />
                        <View
                            style={ProfileStyle.profileListWrapper}
                        >
                            <View
                                style={ProfileStyle.profileListTitleContainer}
                            >
                                <Text
                                    style={ProfileStyle.profileListTitleText}
                                >Help</Text>
                            </View>
                            <View
                                style={ProfileStyle.profileListContainer}
                            >
                                <ProfileListMolecules
                                    icon={faGlobe}
                                    text='FAQ'
                                    iconSize={15}
                                />
                                <ProfileListMolecules
                                    icon={faHeadset}
                                    text='Contact'
                                    iconSize={15}
                                />
                            </View>
                        </View>
                        <View
                            style={ProfileStyle.profileEditWrapper}
                        />
                        <View
                            style={ProfileStyle.profileListWrapper}
                        >
                            <View
                                style={ProfileStyle.profileListTitleContainer}
                            >
                                <Text
                                    style={ProfileStyle.profileListTitleText}
                                >System</Text>
                            </View>
                            <View
                                style={ProfileStyle.profileListContainer}
                            >
                                <ProfileListMolecules
                                    icon={faSignOutAlt}
                                    text='Logout'
                                    iconSize={15}
                                    useHr={false}
                                />
                            </View>
                        </View>
                        <View
                            style={ProfileStyle.profileEditBottomWrapper}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

Profile.propTypes = {
    navigation: propTypes.object,
};
Profile.defaultProps = {
    navigation: null,
};

export default Profile;
