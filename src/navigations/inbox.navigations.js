import React from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
// import Molecules from '../components/molecules';
import Pages from '../pages';
import Molecules from '../components/molecules';
import colors from '../styles/colors';

const { HeaderIconMolecules } = Molecules;
const Stack = createStackNavigator();

function inboxNavigation() {
    const renderTrashIcon = (type) => (
        <HeaderIconMolecules type={type || []}/>
    );
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="InboxPage"
                component={Pages.FileInHalPage}
                options={{
                    title: 'Index',
                    headerStyle: {
                        backgroundColor: colors.WHITE_COLOR,
                        shadowOpacity: 0,
                        elevation: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        paddingLeft: 27,
                        fontSize: 20,
                        paddingTop: 10,
                        fontWeight: 'normal',
                        color: colors.THEME1_COLOR,
                    },
                    headerTitle: 'Inbox',
                    headerRight: () => renderTrashIcon(['trash']),
                }}
            />
            <Stack.Screen
                name="EmptyHal"
                component={Pages.EmptyHalPage}
                options={{
                    title: 'Index',
                    headerStyle: {
                        backgroundColor: colors.WHITE_COLOR,
                        shadowOpacity: 0,
                        elevation: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        paddingLeft: 27,
                        fontSize: 20,
                        paddingTop: 10,
                        fontWeight: 'normal',
                        color: colors.THEME1_COLOR,
                    },
                    headerTitle: 'Inbox Detail',
                }}
            />
            <Stack.Screen
                name="InboxDetail"
                component={Pages.InfoHalPage}
                options={{
                    title: 'Index',
                    headerStyle: {
                        backgroundColor: colors.WHITE_COLOR,
                        shadowOpacity: 0,
                        elevation: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        paddingLeft: 0,
                        fontSize: 20,
                        paddingTop: 0,
                        fontWeight: 'normal',
                        color: colors.THEME1_COLOR,
                    },
                    headerTitle: 'Inbox Detail',
                }}
            />

        </Stack.Navigator>

    );
}

export default inboxNavigation;
