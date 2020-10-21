import TYPES from '../actions/types';

const INITIAL_STATE = {
    form: {
        email: null,
        password: null,
    },
};

const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case TYPES.SET_FORM_LOGIN:
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

export default LoginReducer;
