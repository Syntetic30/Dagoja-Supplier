import React from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
// import Molecules from '../components/molecules';
import Pages from '../pages';
import colors from '../styles/colors';

const OrderStack = createStackNavigator();

function Order() {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen
                name="Order"
                component={Pages.OrderPages}
                options={{
                    headerStyle: {
                        backgroundColor: colors.WHITE_COLOR,
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerTitleStyle: {
                        paddingLeft: 5,
                        fontSize: 20,
                        color: colors.THEME2_COLOR,
                    },
                    headerTitle: 'Order',
                }}
            />
            <OrderStack.Screen
                name="OrderListDetailIncoming"
                component={Pages.OrderListDetailIncoming}
                options={{
                    headerStyle: {
                        backgroundColor: colors.WHITE_COLOR,
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerTitleStyle: {
                        fontSize: 18,
                        color: colors.THEME2_COLOR,
                    },
                    headerTitle: 'Order Detail',
                }}
            />
        </OrderStack.Navigator>
    );
}

export default Order;
