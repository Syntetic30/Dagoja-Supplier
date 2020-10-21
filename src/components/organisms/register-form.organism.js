import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Action from '../../actions';
import Styles from '../../styles';
import Atoms from '../atoms';
import Molecules from '../molecules';

// StyleSheets Component
const {
    LoginFormStyle,
    TermOfServiceStyle,
    GeneralStyle,
} = Styles.StyleSheets;

const { ButtonAtom } = Atoms;
const {
    InputTextWithLabelMolecule,
    // LostPasswordMolecule,
} = Molecules;

function RegisterForm() {
    const RegisterReducer = useSelector((state) => state.RegisterReducer);
    const dispatch = useDispatch();

    const registerAction = () => {
        console.log('isi login reducer', RegisterReducer.form);
        // props.navigation.navigate('LoggedIn', {
        //     screen: 'LoggedIn-Home',
        // });
    };

    const onInputChange = (value, inputType) => {
        dispatch(Action.setFormRegister(inputType, value));
    };

    let btnDisable = true;
    if (RegisterReducer.form.fullName
        && RegisterReducer.form.email
        && RegisterReducer.form.phoneNumber
        && RegisterReducer.form.password
        && RegisterReducer.form.confirmationPassword) {
        btnDisable = false;
    }

    return (
        <View style={ LoginFormStyle.container }>
            <InputTextWithLabelMolecule
                type='text'
                title='Name'
                onChangeText={(value) => onInputChange(value, 'fullName')}
                value={RegisterReducer.form.fullName}
                // callback={this.getCallback.bind(this)}
            />
            <InputTextWithLabelMolecule
                type='text'
                title='Email'
                onChangeText={(value) => onInputChange(value, 'email')}
                value={RegisterReducer.form.email}
                // callback={this.getCallback.bind(this)}
            />
            <InputTextWithLabelMolecule
                type='text'
                title='Phone Number'
                onChangeText={(value) => onInputChange(value, 'phoneNumber')}
                value={RegisterReducer.form.phoneNumber}
                // callback={this.getCallback.bind(this)}
            />
            <InputTextWithLabelMolecule
                type='password'
                title='Password'
                onChangeText={(value) => onInputChange(value, 'password')}
                value={RegisterReducer.form.password}
                // callback={this.getCallback.bind(this)}
            />
            <InputTextWithLabelMolecule
                type='password'
                title='Confirmation Password'
                onChangeText={(value) => onInputChange(value, 'confirmationPassword')}
                value={RegisterReducer.form.confirmationPassword}
                // callback={this.getCallback.bind(this)}
            />
            <View style={TermOfServiceStyle.container}>
                <Text style={TermOfServiceStyle.text}>
                            By signing up you accept the
                    <Text
                        style={GeneralStyle.textLink}
                    >
                        {' Terms of Service '}
                    </Text>
                                and
                    <Text
                        style={GeneralStyle.textLink}
                    >
                        {' Privacy Policy '}
                    </Text>
                </Text>
            </View>
            <ButtonAtom
                type='register'
                text='Register'
                onPress={registerAction}
                disabled={ btnDisable }
            />
        </View>
    );
}

export default RegisterForm;
