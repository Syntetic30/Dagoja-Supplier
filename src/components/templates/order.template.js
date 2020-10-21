import propTypes from 'prop-types';
import React from 'react';
import {
    // StyleSheet,
    // View,
    // Text,
    ScrollView,
} from 'react-native';
import OrderListOrganism from '../organisms/orderList.organism';
import Cake from '../../assets/img/cake.jpeg';

function OrderTemplate(props) {
    return (
        <ScrollView>
            <OrderListOrganism
                data={props.data}
                navigation={props.navigation}
            />
        </ScrollView>
    );
}

OrderTemplate.propTypes = {
    navigation: propTypes.object,
    data: propTypes.array,
};
OrderTemplate.defaultProps = {
    navigation: {},
    data: [
        {
            date: '17 September 2020',
            dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
            image: Cake,
            productName: 'Mayonaise',
            productSerialNumber: 'DGJ-SUP001-12398093843',
            totalProduct: '40 pcs',
            productPrice: 'Rp 30.000',
            status: 'Payment Success',
        },
    ],
};

export default OrderTemplate;
