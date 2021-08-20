//import the router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import local components
import Home from "./components/home";
import Cart from './components/cart'
//import normalizer
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
