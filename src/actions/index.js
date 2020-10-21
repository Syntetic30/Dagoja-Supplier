import TYPES from './types';

const setLabelFocus = (inputType, value) => ({
    type: TYPES.SET_LABEL_FOCUS,
    inputType,
    inputValue: value,
});

const setFormLogin = (inputType, value) => ({
    type: TYPES.SET_FORM_LOGIN,
    inputType,
    inputValue: value,
});

const setFormRegister = (inputType, value) => ({
    type: TYPES.SET_FORM_REGISTER,
    inputType,
    inputValue: value,
});

export default {
    setLabelFocus,
    setFormLogin,
    setFormRegister,
};
