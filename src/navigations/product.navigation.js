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

const ProductStack = createStackNavigator();

function Product() {
    const renderHeaderIcon = (type) => (
        <HeaderIconMolecule type={type || []} />
    );
    return (
        <ProductStack.Navigator
            initialRouteName='Tabs-Product'
            screenOptions={{
                // gestureDirection: 'horizontal-inverted',
            }}>
            <ProductStack.Screen
                name="Tabs-Product"
                component={Pages.ProductPage}
                options={{
                    headerStyle: GeneralStyle.pageHeader,
                    headerTitleStyle: GeneralStyle.pageHeaderTitle,
                    headerTitle: 'Product',
                    headerRight: () => renderHeaderIcon(['search', 'plus']),
                }}
            />
            <ProductStack.Screen
                name="Tabs-Add"
                component={Pages.ProductAddPage}
                options={{
                    headerStyle: GeneralStyle.pageHeader,
                    headerTitleStyle: GeneralStyle.pageHeaderTitle,
                    headerTitle: 'Edit Product',
                    headerRight: () => renderHeaderIcon(['trash']),
                }}
            />
        </ProductStack.Navigator>
    );
}

export default Product;
