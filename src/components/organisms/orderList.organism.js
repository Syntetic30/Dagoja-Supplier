import propTypes from 'prop-types';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import ListItemMolecule from '../molecules/ListItem.molecules';

function orderListOrganism(props) {
    return (
        <>
            {
                props.data
                    .map((x, i) => (
                        <ListItemMolecule
                            key={i}
                            date={x.date}
                            dateSerialNumber={x.dateSerialNumber}
                            image={x.image}
                            productName={x.productName}
                            productSerialNumber={x.productSerialNumber}
                            totalProduct={x.totalProduct}
                            productPrice={x.productPrice}
                            status={x.status}
                            navigation={props.navigation}
                        />
                    ))
            }
        </>
    );
}
export default orderListOrganism;

orderListOrganism.propTypes = {
    data: propTypes.array,
    navigation: propTypes.object,
};
orderListOrganism.defaultProps = {
    data: [],
    navigation: {},
};
