import React from 'react';
import { Text, View, Image } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from '../../styles/stylesheets/order.style';
// import colors from '../../styles/colors';
import Empty from '../../assets/icon/empty.png';

function EmptyList() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.backgroundImage}>
                <Image source={Empty} />
                <Text style={styles.backgroundText}>No Item Found</Text>
            </View>
        </View>
    );
}

export default EmptyList;
