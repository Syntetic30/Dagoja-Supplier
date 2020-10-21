import React from 'react';
import {
    Text, View, Image, TouchableOpacity,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import propTypes from 'prop-types';
import { styles } from '../../styles/stylesheets/listItem.style';
// import Cake from '../../assets/img/cake.jpeg';
// import OrderListDetail from '../../navigations/index';

function ListItemMolecule(props) {
    const onItemPressed = () => {
        props.navigation.navigate('OrderListDetailIncoming');
    };
    // const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={onItemPressed}>
            <View style={styles.contentWrapper}>
                <View style={styles.dateWrapper}>
                    <Text style={styles.dateText}>{props.date}</Text>
                    <Text style={styles.dateSerialNumber}>{props.dateSerialNumber}</Text>
                </View>
                <View style={styles.productWrapper}>
                    <View>
                        <Image style={styles.productImage}source={props.image}/>
                    </View>
                    <View style={styles.productTextWrapper}>
                        <Text style={styles.ProductTextName}>{props.productName}</Text>
                        <Text
                        // eslint-disable-next-line max-len
                            style={styles.productTextSerialNumber}>{props.productSerialNumber}</Text>
                        <Text style={styles.productTextPrice}>{props.productPrice}</Text>
                    </View>
                    <View style={styles.totalWrapper}>
                        <Text style={styles.totalTextWrapper}>{props.totalProduct}</Text>
                    </View>
                </View>
                <View style={styles.statusWrapper}>
                    <Text style={styles.statusText}>{props.status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

ListItemMolecule.propTypes = {
    date: propTypes.string,
    dateSerialNumber: propTypes.string,
    image: propTypes.any,
    productName: propTypes.string,
    productSerialNumber: propTypes.string,
    totalProduct: propTypes.string,
    productPrice: propTypes.string,
    status: propTypes.string,
    navigation: propTypes.object,
};
ListItemMolecule.defaultProps = {
    date: null,
    dateSerialNumber: null,
    image: {},
    productName: null,
    productSerialNumber: null,
    totalProduct: null,
    productPrice: null,
    status: null,
    navigation: {},
};

export default ListItemMolecule;
