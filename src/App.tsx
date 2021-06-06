//import the router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import local components
import Home from "./components/home";
//import normalizer
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
