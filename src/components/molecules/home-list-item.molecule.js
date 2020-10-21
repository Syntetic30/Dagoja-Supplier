import React from 'react';
import {
    View, Text, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/stylesheets/order.style';
// import DevStatusItem from '../atoms/DevStatusItem.atoms';

function DevStatus() {
    const navigation = useNavigation();
    return (
        <View style={styles.devStatusWrapper}>
            <TouchableOpacity>
                <View style={styles.devStatusTextWrapper}>
                    <Text onPress={() => navigation.navigate('')} style={styles.devStatusTextActive}>All Product</Text>
                    <Text onPress={() => Alert.alert('You Pressed Me')} style={styles.devStatusText}>Out of Stock</Text>
                    <Text onPress={() => Alert.alert('You Pressed Me')} style={styles.devStatusText}>Inactive</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default DevStatus;
