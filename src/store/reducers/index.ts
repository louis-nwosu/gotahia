import { loadProductsActions } from '../actions/loadProducts';
import { productsActions } from "../actions/handleProducts";

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
        //actions to load product from the API
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

        //handle actions to add product to the cart
        case productsActions.addToCart: 
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        //handle actions to add products to wishlist
        case productsActions.addToWishList: 
            return {
                ...state,
                wishList: [...state.wishList, action.payload]
            }

        //handle actions to delete product from cart
        case productsActions.deleteProductFromCart: 
        return {
            ...state,
            cart: state.cart.filter(cur => cur !== action.payload)
        }

        //default case
        default:
            return state
    }
}