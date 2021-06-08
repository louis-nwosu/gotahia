interface ProductsActions {
    addToCart: string;
    addToWishList: string;
    deleteProductFromCart: string
}

export const productsActions: ProductsActions = {
    addToCart: 'ADD_TO_CART',
    addToWishList: 'ADD_TO_WISHLIST',
    deleteProductFromCart: 'DELETE_PRODUCT_FROM_CART'
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
    price: number,
    id: number
}

export const addProductToWishList = (payload: AddProductToWishList) => ({
    type: productsActions.addToWishList,
    payload
});

//actions to delete a product from the wishlist
export const deleteProductFromCart = (payload: number) => ({
    type: productsActions.deleteProductFromCart,
    payload
})