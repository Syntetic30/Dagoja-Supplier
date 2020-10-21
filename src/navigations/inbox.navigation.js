import React from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
// import Molecules from '../components/molecules';
import Pages from '../pages';
import colors from '../styles/colors';

const InboxStack = createStackNavigator();

function Inbox() {
    return (
        <InboxStack.Navigator>
            <InboxStack.Screen
                name="Inbox-Inbox"
                component={Pages.InboxPage}
                options={{
                    headerStyle: {
                        backgroundColor: colors.WHITE_COLOR,
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        color: colors.GREY3_COLOR,
                        fontFamily: 'OpenSans-Medium',
                    },
                    headerTitle: 'Inbox',
                }}
            />
            <InboxStack.Screen
                name="Inbox-Detail"
                component={Pages.InboxDetailPage}
                options={{
                    headerStyle: {
                        backgroundColor: colors.WHITE_COLOR,
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        color: colors.GREY3_COLOR,
                        fontFamily: 'OpenSans-Medium',
                    },
                    headerTitle: 'Inbox Detail',
                    // headerTransparent: true,
                }}
            />
        </InboxStack.Navigator>
    );
}

export default Inbox;
