import TYPES from '../actions/types';

const INITIAL_STATE = {
    form: {
        fullName: null,
        email: null,
        phoneNumber: null,
        password: null,
        confirmationPassword: null,
    },
};

const RegisterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case TYPES.SET_FORM_REGISTER:
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        };
    default:
        return state;
    }
};

export default RegisterReducer;
