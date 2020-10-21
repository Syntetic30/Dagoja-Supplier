import propTypes from 'prop-types';
import React from 'react';
import {
    // StyleSheet,
    // View,
    // Text,
    ScrollView,
} from 'react-native';
import OrderDetailOrganism from '../organisms/orderDetail.organism';
import Cake from '../../assets/img/cake.jpeg';

function OrderDetailTemplate(props) {
    return (
        <ScrollView>
            <OrderDetailOrganism
                data={props.data}
                navigation={props.navigation}
            />
        </ScrollView>
    );
}

OrderDetailTemplate.propTypes = {
    navigation: propTypes.object,
    data: propTypes.array,
};
OrderDetailTemplate.defaultProps = {
    navigation: {},
    data: [
        {
            serialNumber: 'INV/20200909/XX/12309',
            date: '10 September 2020',
            image: Cake,
            productName: 'Mayonaise',
            productSerialNumber: 'DGJ-SUP001-12398093843',
            productPrice: 'Rp 30.000',
            quantitiy: '40',
            courierName: 'Tatang Supratna',
            pickupNumber: 'COU-20200910123321',
            address: 'Jl.Simpang sebelas Jakarta Tengah, Karawang',
            paymentMethod: 'Debit - Mandiri',
            paymentDate: '20 September 2020',
            price: '30.000',
            totalPrice: '30.000',
            status: 'Payment Success',
        },
    ],
};

export default OrderDetailTemplate;
