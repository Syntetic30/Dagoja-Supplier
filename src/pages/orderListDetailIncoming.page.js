import React from 'react';
import {
    // StyleSheet,
    // Text,
    View,
    // Image,
} from 'react-native';
// import colors from '../styles/colors';
import propTypes from 'prop-types';
import Cake from '../assets/img/cake.jpeg';
import OrderDetailTemplate from '../components/templates/order-detail.template';
// import Components from '../components';

const dataDummyDetail = [
    {
        serialNumber: 'INV/20200909/XX/12309',
        date: '10 September 2020',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        productPrice: '30.000',
        quantity: '40',
        courierName: 'Tatang Supratna',
        pickupNumber: 'COU-20200910123321',
        address: 'Jl.Simpang sebelas Jakarta Tengah, Karawang',
        paymentMethod: 'Debit - Mandiri',
        paymentDate: '20 September 2020',
        price: '30.000',
        totalPrice: '30.000',
        status: 'Payment Success',
    },
];

function OrderListDetailIncoming(props) {
    return (
        <View style={{ flex: 1 }}>
            <OrderDetailTemplate navigation={props.navigation} data={dataDummyDetail}/>
        </View>
    );
}

OrderListDetailIncoming.propTypes = {
    navigation: propTypes.object,
    image: propTypes.any,
};
OrderListDetailIncoming.defaultProps = {
    navigation: {},
    image: null,
};

export default OrderListDetailIncoming;
