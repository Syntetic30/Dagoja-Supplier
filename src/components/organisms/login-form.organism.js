// import propTypes from 'prop-types';
// import React from 'react';
// import { View } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import Action from '../../actions';
// import Styles from '../../styles';
// import Atoms from '../atoms';
// import Molecules from '../molecules';

// // StyleSheets Component
// const {
//     LoginFormStyle,
// } = Styles.StyleSheets;

// const { ButtonAtom } = Atoms;
// const {
//     InputTextWithLabelMolecule,
//     LostPasswordMolecule,
// } = Molecules;

// function LoginForm(props) {
//     const LoginReducer = useSelector((state) => state.LoginReducer);
//     const dispatch = useDispatch();

//     const forgotPasswordAction = () => {
//         props.navigation.navigate('Forgot', {
//             screen: 'Forgot-Email',
//         });
//     };

//     const loginAction = () => {
//         // console.log('isi login reducer', LoginReducer.form);
//         props.navigation.navigate('LoggedIn', {
//             screen: 'LoggedIn-Home',
//         });
//     };

//     const onInputChange = (value, inputType) => {
//         dispatch(Action.setFormLogin(inputType, value));
//     };

//     let btnDisable = true;
//     if (LoginReducer.form.email && LoginReducer.form.password) {
//         btnDisable = false;
//     }

//     return (
//         <View style={ LoginFormStyle.container }>
//             <InputTextWithLabelMolecule
//                 type='text'
//                 title='Email'
//                 onChangeText={(value) => onInputChange(value, 'email')}
//                 value={LoginReducer.form.email}
//                 // callback={getCallback.bind(this)}
//             />
//             <InputTextWithLabelMolecule
//                 type='password'
//                 title='Password'
//                 onChangeText={(value) => onInputChange(value, 'password')}
//                 value={LoginReducer.form.password}
//                 // callback={getCallback.bind(this)}
//             />
//             <ButtonAtom
//                 type='login'
//                 text='Login'
//                 onPress={loginAction}
//                 disabled={btnDisable}
//             />
//             <LostPasswordMolecule
//                 text='Lost your password?'
//                 onPress={forgotPasswordAction}
//             />
//         </View>
//     );
// }

// LoginForm.propTypes = {
//     navigation: propTypes.object,
// };
// LoginForm.defaultProps = {
//     navigation: null,
// };

// export default LoginForm;
