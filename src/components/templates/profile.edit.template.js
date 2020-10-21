import React from 'react';
import { View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// Styles Component
// import Styles from '../../styles';

// Molecules Component
import moleculesComponent from '../molecules';

// Atoms component
import atomsComponent from '../atoms';

// Styles Component List
// const {
//     LoginStyle,
// } = Styles.StyleSheets;

// Molucules Component List
const {
    ProfileEditMolecules,
} = moleculesComponent;

// Atoms Component List
const {
    ButtonProfileEditAtoms,
} = atomsComponent;

// Event Handler
const onPressHandler = () => {
    Alert.alert('Pressed');
};

function ProfileEdit() {
    return (<ScrollView>
        <View>
            <ProfileEditMolecules />
            <ButtonProfileEditAtoms text='Next' onPress={onPressHandler} />
        </View></ScrollView>
    );
}

export default ProfileEdit;
