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
                    <Text onPress={() => navigation.navigate('Order')} style={styles.devStatusTextActive}>Incoming</Text>
                    <Text onPress={() => Alert.alert('No Order Picking Up Right Now')} style={styles.devStatusText}>Picking Up</Text>
                    <Text onPress={() => Alert.alert('No Order Sending Right Now')} style={styles.devStatusText}>Sending</Text>
                    <Text onPress={() => Alert.alert('No Order Done Right Now')} style={styles.devStatusText}>Done</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default DevStatus;
