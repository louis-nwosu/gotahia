import React, { useState, Fragment } from "react";
//import local components
import AppBar from "./navBar";
import ItemsDisplay from "./itemsDisplay";
//import the actions
import ActionObj from "../../store/actions";
//import react-redux functions
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  //state to toggle what component is showing
  const [cur, setCur] = useState<string | EventTarget>("all products");
  const setTab = (tab: string | EventTarget) => {
    setCur(tab);
  };
  //load the products
  React.useEffect(() => {
    dispatch(ActionObj.LoadProductsMain());
    console.log("worke");
  }, [dispatch]);

  return (
    <Fragment>
      <AppBar setTabFunc={setTab} />
      <ItemsDisplay currentTab={cur} />
    </Fragment>
  );
}

export default Home;
