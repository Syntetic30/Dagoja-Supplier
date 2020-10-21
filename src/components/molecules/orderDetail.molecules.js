import React from 'react';
import {
    Text, View, Image,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import propTypes from 'prop-types';
import { styles } from '../../styles/stylesheets/orderDetail.style';
// import Cake from '../../assets/img/cake.jpeg';
// import OrderListDetail from '../../navigations/index';

function OrderDetailMolecule(props) {
    // const onItemPressed = () => {
    //     props.navigation.navigate('OrderListDetailIncoming');
    // };
    // const navigation = useNavigation();
    return (
        <>
            <View style={styles.serialNumberWrapper}>
                <View>
                    <Text style={styles.serialNumberText}>{props.serialNumber}</Text>
                    <Text style={styles.serialNumberDate}>{props.date}</Text>
                </View>
                <View>
                    <Text style={styles.serialNumberStatusText}>Payment Success</Text>
                </View>
            </View>

            <View style={{ flex: 1, padding: 25 }}>
                <View style={styles.productWrapper}>
                    <View>
                        <Image style={styles.productImage}source={props.image}/>
                    </View>
                    <View style={styles.productTextLeftWrapper}>
                        <Text style={styles.ProductTextName}>{props.productName}</Text>
                        <Text style={styles.productTextSerialNumber}>
                            {props.productSerialNumber}</Text>
                        <Text style={styles.productTextPrice}>Rp {props.productPrice}</Text>
                    </View>
                    <View style={styles.totalWrapper}>
                        <Text style={styles.totalTextWrapper}>{props.quantity} pcs</Text>
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.pickUpTitle}>Detail Pick Up</Text>
                    <View style={styles.pickUpItemWrapper}>
                        <View style={styles.pickUpTextLeftWrapper}>
                            <Text style={styles.pickUpTextLeft}>Courier Name</Text>
                            <Text style={styles.pickUpTextLeft}>Pick Up Number</Text>
                            <Text style={styles.pickUpTextLeft}>Pick Up Address</Text>
                        </View>
                        <View style={styles.pickUpTextRightWrapper}>
                            <Text style={styles.pickUpTextRight}>{props.courierName}</Text>
                            <Text style={styles.pickUpTextRight}>{props.pickupNumber}</Text>
                            <Text style={styles.pickUpTextRight}>{props.address}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.paymentTitle}>Payment Information</Text>
                    <View style={styles.paymentItemWrapper}>
                        <View style={styles.paymentTextLeftWrapper}>
                            <Text style={styles.paymentTextLeft}>Payment Method</Text>
                            <Text style={styles.paymentTextLeft}>Payment Date</Text>
                            <Text style={styles.paymentTextLeft}>Price</Text>
                            <Text style={styles.paymentTextLeft}>Total Price</Text>
                        </View>
                        <View style={styles.paymentTextRightWrapper}>
                            <Text style={styles.paymentTextRight}>{props.paymentMethod}</Text>
                            <Text style={styles.paymentTextRight}>{props.paymentDate}</Text>
                            <Text style={styles.paymentTextRight}>Rp {props.price}</Text>
                            <Text style={styles.paymentTextRight}>Rp {props.totalPrice}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.statusWrapper}>
                    <View style={styles.statusTextWrapper}>
                        <Text style={styles.statusText}>{props.status}</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

OrderDetailMolecule.propTypes = {
    serialNumber: propTypes.string,
    date: propTypes.string,
    image: propTypes.any,
    productName: propTypes.string,
    productSerialNumber: propTypes.string,
    productPrice: propTypes.string,
    quantity: propTypes.string,
    courierName: propTypes.string,
    pickupNumber: propTypes.string,
    address: propTypes.string,
    paymentMethod: propTypes.string,
    paymentDate: propTypes.string,
    price: propTypes.string,
    totalPrice: propTypes.string,
    status: propTypes.string,
    navigation: propTypes.object,
};
OrderDetailMolecule.defaultProps = {
    serialNumber: null,
    date: null,
    image: null,
    productName: null,
    productSerialNumber: null,
    productPrice: null,
    quantity: null,
    courierName: null,
    pickupNumber: null,
    address: null,
    paymentMethod: null,
    paymentDate: null,
    price: null,
    totalPrice: null,
    status: null,
    navigation: {},
};

export default OrderDetailMolecule;
