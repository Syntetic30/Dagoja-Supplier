import propTypes from 'prop-types';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import OrderDetailMolecule from '../molecules/orderDetail.molecules';

function orderDetailOrganism(props) {
    return (
        <>
            {
                props.data
                    .map((x, i) => (
                        <OrderDetailMolecule
                            key={i}
                            serialNumber={x.serialNumber}
                            date={x.date}
                            image={x.image}
                            productName={x.productName}
                            productSerialNumber={x.productSerialNumber}
                            productPrice={x.productPrice}
                            quantity={x.quantity}
                            courierName={x.courierName}
                            pickupNumber={x.pickupNumber}
                            address={x.address}
                            paymentMethod={x.paymentMethod}
                            paymentDate={x.paymentDate}
                            price={x.price}
                            totalPrice={x.totalPrice}
                            status={x.status}
                            navigation={props.navigation}
                        />
                    ))
            }
        </>
    );
}
export default orderDetailOrganism;

orderDetailOrganism.propTypes = {
    data: propTypes.array,
    navigation: propTypes.object,
};
orderDetailOrganism.defaultProps = {
    data: [],
    navigation: {},
};
