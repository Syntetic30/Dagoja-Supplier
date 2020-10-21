import React from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
// import Molecules from '../components/molecules';
import Pages from '../pages';
import colors from '../styles/colors';

const ProfileStack = createStackNavigator();

function Profile() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={Pages.ProfilePage}
                options={{
                    // headerShown: false,
                    headerMode: 'screen',
                    cardStyle: { backgroundColor: colors.WHITE_COLOR },
                    headerTitle: 'Profile',
                    headerTintColor: colors.THEME_COLOR,
                    headerTitleStyle: { fontSize: 17, fontFamily: 'OpenSans-Regular' },
                }}
            />
            <ProfileStack.Screen
                name="ProfileEdit"
                component={Pages.ProfileEditPage}
                options={{
                    // headerShown: false,
                    headerMode: 'screen',
                    cardStyle: { backgroundColor: colors.WHITE_COLOR },
                    headerTitle: 'Edit Profile',
                    headerTintColor: colors.THEME_COLOR,
                    headerTitleStyle: { fontSize: 17, fontFamily: 'OpenSans-Regular' },
                }}
            />
        </ProfileStack.Navigator>
    );
}

export default Profile;
