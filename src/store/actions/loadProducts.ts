//declare the object interface
interface LoadProducstsActionTypes {
  loadProducts: string;
  loadProductsSucces: string;
  loadProductsFailure: string;
}

//define the action object
export const loadProductsActions: LoadProducstsActionTypes = {
  loadProducts: "LOAD_PRODUCTS",
  loadProductsSucces: "LOAD_PRODUCTS_SUCCESS",
  loadProductsFailure: "LOAD_PRODUCTS_FAILURE",
};

//define the actions
const loadProductsFunc = () => ({
  type: loadProductsActions.loadProducts,
});

const loadProductsSuccesFunc = (payload: any) => ({
  type: loadProductsActions.loadProductsSucces,
  payload,
});

const loadProductsFailureFunc = () => ({
  type: loadProductsActions.loadProductsFailure,
});

export function LoadProductsMain() {
  return async (dispatch: any) => {
    //trigger the loading spinner
    dispatch(loadProductsFunc());
    try {
      //make the API request
      const data = await fetch("https://fakestoreapi.com/products/");
      const products = await data.json();
      dispatch(loadProductsSuccesFunc(products));
    } catch (error) {
      console.log(error.message);
      //notify the user of an error
      dispatch(loadProductsFailureFunc());
    }
  };
}
