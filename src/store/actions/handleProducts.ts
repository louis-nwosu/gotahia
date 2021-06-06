interface ProductsActions {
    addToCart: string;
    addToWishList: string;
}

export const productsActions: ProductsActions = {
    addToCart: 'ADD_TO_CART',
    addToWishList: 'ADD_TO_WISHLIST'
}

//action to add product to cart
interface AddToCartPayload {
    img: string;
    description: string;
    title: string;
    price: number
}

export const addProductToCart = (payload: AddToCartPayload ) => ({
    type: productsActions.addToCart,
    payload
});


//actions to add a product to wishlist
interface AddProductToWishList {
    img: string;
    description: string;
    title: string;
    price: number
}

export const addProductToWishList = (payload: AddProductToWishList) => ({
    type: productsActions.addToWishList,
    payload
});