//import the router
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import local components
import Home from './components/home';
//import normalizer
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
//import theme creation copmponents
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

//implement the theme object
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#a31f47',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
