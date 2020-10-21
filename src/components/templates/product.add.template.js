import React from 'react';
import { View, Alert, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// Styles Component
// import Styles from '../../styles';

// Molecules Component
import moleculesComponent from '../molecules';

// Atoms component
import atomsComponent from '../atoms';
import Styles from '../../styles';

// Styles Component List
// const {
//     LoginStyle,
// } = Styles.StyleSheets;

// Molucules Component List
const {
    ProductAddMolecules,
} = moleculesComponent;

// Atoms Component List
const {
    ButtonProductAtoms,
} = atomsComponent;

const {
    ProductAddStyle,
} = Styles.StyleSheets;

// Event Handler
const onPressHandler = () => {
    Alert.alert('Pressed');
};

function ProductAdd() {
    return (<ScrollView>
        <View>
            <ProductAddMolecules />
            <ButtonProductAtoms onPress={onPressHandler} />
            <Text onPress={onPressHandler} style={ProductAddStyle.textlogin}>Save</Text>
        </View></ScrollView>
    );
}

export default ProductAdd;
