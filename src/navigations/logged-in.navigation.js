/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import {
    faHome,
    faUserCircle,
    faEnvelope,
    faShoppingCart,
    faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import { Text, View } from 'react-native';
// import Molecules from '../components/molecules';
import ProfileScreen from './profile.navigation';
import InboxScreen from './inbox.navigations';
import ProductScreen from './product.navigation';
import OrderScreen from './order.navigation';
import HomeScreen from './home.navigation';

// import Pages from '../pages';
import colors from '../styles/colors';
// import Dagoja from '../assets/icon/Dagoja.png';

// const LoggedInHomeStack = createStackNavigator();
const LoggedInTab = createBottomTabNavigator();

// function HomeeScreen() {
//     return (
//         // eslint-disable-next-line react-native/no-inline-styles
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home!</Text>
//         </View>
//     );
// }

// function HomeScreenStack() {
//     return (
//         <LoggedInHomeStack.Navigator>
//             <LoggedInHomeStack.Screen
//                 name="LoggedIn-Home"
//                 component={ HomeeScreen }
//                 options={{
//                     title: null,
//                     headerStyle: {
//                         backgroundColor: colors.WHITE_COLOR,
//                         shadowOpacity: 0,
//                         elevation: 0,
//                     },
//                     headerTitleStyle: {
//                         fontWeight: 'normal',
//                         color: colors.GREY3_COLOR,
//                         fontFamily: 'OpenSans-Medium',
//                     },
//                 }}
//             />
//         </LoggedInHomeStack.Navigator>
//     );
// }

function LoggedIn() {
    return (
        <LoggedInTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.THEME_COLOR,
                inactiveTintColor: colors.GREY2_COLOR,
                labelStyle: {
                    marginTop: -10,
                    marginBottom: 5,
                },
                tabStyle: {
                    backgroundColor: colors.WHITE_COLOR,
                    shadowOpacity: 0,
                    elevation: 0,
                },
            }}
        >
            <LoggedInTab.Screen
                name="LoggedIn-Home"
                component={ HomeScreen }
                options={{
                    title: 'Home',
                    // eslint-disable-next-line arrow-body-style
                    tabBarIcon: ({ color }) => {
                        return <FontAwesomeIcon icon={faHome} size={20} color={color} />;
                    },
                }}
            />
            <LoggedInTab.Screen
                name="LoggedIn-Product"
                component={ ProductScreen }
                options={{
                    title: 'Product',
                    // eslint-disable-next-line arrow-body-style
                    tabBarIcon: ({ color }) => {
                        return <FontAwesomeIcon icon={faShoppingBag} size={20} color={color} />;
                    },
                }}
            />
            <LoggedInTab.Screen
                name="LoggedIn-Order"
                component={ OrderScreen }
                options={{
                    title: 'Order',
                    // eslint-disable-next-line arrow-body-style
                    tabBarIcon: ({ color }) => {
                        return <FontAwesomeIcon icon={faShoppingCart} size={20} color={color} />;
                    },
                }}
            />
            <LoggedInTab.Screen
                name="LoggedIn-Inbox"
                component={ InboxScreen }
                options={{
                    title: 'Inbox',
                    // eslint-disable-next-line arrow-body-style
                    tabBarIcon: ({ color }) => {
                        return <FontAwesomeIcon icon={faEnvelope} size={20} color={color} />;
                    },
                }}
            />
            <LoggedInTab.Screen
                name="LoggedIn-Profile"
                component={ ProfileScreen }
                options={{
                    title: 'Profile',
                    // eslint-disable-next-line arrow-body-style
                    tabBarIcon: ({ color }) => {
                        return <FontAwesomeIcon icon={faUserCircle} size={20} color={color} />;
                    },
                }}
            />
        </LoggedInTab.Navigator>
    );
}

export default LoggedIn;
