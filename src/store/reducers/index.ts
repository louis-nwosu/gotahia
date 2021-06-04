import { loadProductsActions } from '../actions/loadProducts';

interface User {
    firstName: string;
    lastName: string;
    emailAdress: string;
    password: string;
}

interface InitialDataType {
    products: any[];
    cart: any[];
    wishList: any[];
    isLoading: boolean;
    hasError: boolean;
    user: User;
}

const InitialData: InitialDataType = {
    products: [],
    cart: [],
    wishList: [],
    isLoading: false,
    hasError: false,
    user: {
        firstName: '',
        lastName: '',
        emailAdress: '',
        password: ''
    }
}

export default function reducer(state = InitialData, action: { type: string, payload: any }) {
    switch (action.type) {
        case loadProductsActions.loadProducts:
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case loadProductsActions.loadProductsSucces:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                products: action.payload
            }
        case loadProductsActions.loadProductsFailure:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        default:
            return state
    }
}