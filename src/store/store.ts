import { createStore } from 'redux';

import type {Password} from "../types and interfaces/Interfaces.tsx";

const defaultState = {
    passwordsArray: [],
    favoritesPasswordsArray: [],
    usersArray: [],
};

const reducer = (state = defaultState, action:any) => {
    switch (action.type) {
        case "SET_PASSWORDS_ARRAY":
            return {
                ...state,
                passwordsArray: action.payload,
            }
        case "SET_FAVORITES":
            return {
                ...state,
                favoritesPasswordsArray: action.payload,
            }
        case "ADD_PASSWORD_IN_FAVORITES":
            return {
                ...state,
                favoritesPasswordsArray: [...state.favoritesPasswordsArray, action.payload],
            };
        case "DELETE_PASSWORD_FROM_FAVORITES":
            return {
                ...state,
                favoritesPasswordsArray: state.favoritesPasswordsArray.filter((item:Password) => item.passwordId !== action.payload),
            };
        case "SET_USERS_ARRAY":
            return {
                ...state,
                usersArray: action.payload,
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
