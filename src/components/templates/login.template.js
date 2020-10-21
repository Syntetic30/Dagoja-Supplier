import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import propTypes from 'prop-types';
// Styles Component
import Styles from '../../styles';

// Molecules Component
import moleculesComponent from '../molecules';

// Atoms component
import atomsComponent from '../atoms';

// Styles Component List
const {
    LoginStyle,
} = Styles.StyleSheets;

// Molucules Component List
const {
    LoginMolecules, LostPasswordMolecule,
} = moleculesComponent;

// Atoms Component List
const {
    ButtonAtom,
} = atomsComponent;

// Event Handler
function Hello(props) {
    const loginAction = () => {
        // console.log('isi login reducer', LoginReducer.form);
        props.navigation.navigate('LoggedIn', {
            screen: 'LoggedIn-Home',
        });
    };
    const forgotPasswordAction = () => {
        props.navigation.navigate('Forgot', {
            screen: 'Forgot-Email',
        });
    };
    // let btnDisable = true;
    // if (LoginReducer.form.email && LoginReducer.form.password) {
    //     btnDisable = false;
    // }
    return (<ScrollView>
        <View style={LoginStyle.login}>
            <LoginMolecules />
            <ButtonAtom type='login' text='Login' onPress={loginAction} />
            <LostPasswordMolecule
                text='Forgot password?'
                onPress={forgotPasswordAction}
            />
        </View></ScrollView>
    );
}
Hello.propTypes = {
    navigation: propTypes.object,
    data: propTypes.object,
};
Hello.defaultProps = {
    navigation: {},
    data: {},
};

export default Hello;
