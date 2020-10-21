import propTypes from 'prop-types';
import React from 'react';
import {
    ScrollView,
    View,
} from 'react-native';

import { stylesGeneral } from '../styles/stylesheets/orderGeneral.style';

// Image
import Cake from '../assets/img/cake.jpeg';

// Component
import Components from '../components';

const { TemplateComponents, MoleculeComponents } = Components;

const { OrderTemplate } = TemplateComponents;
const {
    DevStatus, SearchBar, EmptyList,
} = MoleculeComponents;

// import OrderTemplate from '../components/templates/order.template';
// import DevStatus from '../components/molecules/DevStatus.molecules';
// import NavTab from '../components/molecules/NavTab.molecules';
// import SearchBar from '../components/molecules/SearchBar.molecules';
// import EmptyList from '../components/molecules/EmptyList.molecules';

const dataDummyIncoming = [
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
    {
        date: '20 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Payment Success',
    },
    {
        date: '25 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Payment Success',
    },
    {
        date: '30 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Payment Success',
    },
];

const dataDummyPickingUp = [
    {
        date: '17 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Courier On The Way To You',
    },
    {
        date: '20 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Courier On The Way To You',
    },
    {
        date: '25 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Courier On The Way To You',
    },
    {
        date: '30 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Courier On The Way To You',
    },
];

const dataDummySending = [
    {
        date: '17 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Sending To Customer',
    },
    {
        date: '20 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Sending To Customer',
    },
    {
        date: '25 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Sending To Customer',
    },
    {
        date: '30 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Sending To Customer',
    },
];

const dataDummyDone = [
    {
        date: '17 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Complete',
    },
    {
        date: '20 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Complete',
    },
    {
        date: '25 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Complete',
    },
    {
        date: '30 September 2020',
        dateSerialNumber: 'INV/20200917/XX/XX/1238876234',
        image: Cake,
        productName: 'Mayonaise',
        productSerialNumber: 'DGJ-SUP001-12398093843',
        totalProduct: '40 pcs',
        productPrice: 'Rp 30.000',
        status: 'Complete',
    },
];

export default function Order(props) {
    return (
    // Page
        <View style={stylesGeneral.orderWrapper}>
            {/* Main Page Konten */}
            <View style={stylesGeneral.mainPageWrapper}>
                {/* Search Bar */}
                <SearchBar />
                {/* Delivery Status */}
                <DevStatus />

                {/* Main Content */}
                <ScrollView style={stylesGeneral.scrollView}>
                    {dataDummyIncoming.length === 0
                     || dataDummyPickingUp.length === 0
                     || dataDummySending === 0
                     || dataDummyDone === 0
                        ? <EmptyList/>
                        : <OrderTemplate
                            navigation={props.navigation}
                            data={dataDummyIncoming}
                            data2={dataDummyPickingUp}
                            data3={dataDummySending}
                            data4={dataDummyDone}
                        />
                    }
                    <View style={stylesGeneral.pembatas} />
                </ScrollView>
            </View>
        </View>
    );
}

Order.propTypes = {
    navigation: propTypes.object,
    image: propTypes.any,
};
Order.defaultProps = {
    navigation: {},
    image: null,
};
