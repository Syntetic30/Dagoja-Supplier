import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { styles } from '../../styles/stylesheets/order.style';

function SearchBar() {
    return (
        <View style={styles.searchWrapper}>
            <View style={styles.searchBarWrapper}>
                <FontAwesomeIcon icon={faSearch} style={styles.searchIcon}/>
                <TextInput placeholder='Search order' style={styles.textInputSearchBar} />
            </View>
        </View>
    );
}

export default SearchBar;
