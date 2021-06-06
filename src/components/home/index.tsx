import React from "react";
//import local components
import AppBar from "./navBar";
//import local components
import ItemsDisplay from "./itemsDisplay";
//import the actions
import ActionObj from "../../store/actions";
//import react-redux functions
import { useDispatch } from "react-redux";
 
function Home() {
  const dispatch = useDispatch();
  //state to toggle what component is showing
  const [cur, setCur] = React.useState<string | EventTarget>(
    "all products"
  );
  const setTab = (tab: string | EventTarget) =>{
    setCur(tab);
    console.log(tab)
  };
  //load the products
  React.useEffect(() => {
    dispatch(ActionObj.LoadProductsMain());
    console.log("worke");
  }, [dispatch]);

  return (
    <React.Fragment>
      <AppBar setTabFunc={setTab} />
      <ItemsDisplay currentTab={cur} />
    </React.Fragment>
  );
}

export default Home;
