import React from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';

import Molecules from '../components/molecules';
import Pages from '../pages';
import Styles from '../styles';

const {
    HeaderIconMolecule,
} = Molecules;

const {
    GeneralStyle,
} = Styles.StyleSheets;

const HomeStack = createStackNavigator();

function Home() {
    const renderHeaderIcon = (type) => (
        <HeaderIconMolecule type={type || []} /> // tipe array
    );
    return (
        <HomeStack.Navigator
            initialRouteName='Tabs-Home'
            screenOptions={{
                // gestureDirection: 'horizontal-inverted',
            }}
        >
            <HomeStack.Screen
                name="Tabs-Home"
                component={Pages.HomePage}
                options={{
                    headerStyle: GeneralStyle.pageHeader,
                    headerTitleStyle: GeneralStyle.pageHeaderTitle,
                    headerTitle: 'Home',
                    headerRight: () => renderHeaderIcon(['search']),
                }}
            />
        </HomeStack.Navigator>
    );
}

export default Home;
