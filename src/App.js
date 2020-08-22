import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme';
import SignIn from "./pages/SignIn";
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
    const routes = [
        { path: "/dashboard", Component: Dashboard },
        { path: "/signin", Component: SignIn },
        { path: "/register", Component: Register }
    ]
  return (
          <ThemeProvider theme={theme}>
            <div className="App">
              <header className="App-header">
                  <Router>
                      <Switch>
                          {routes.map(({ path, Component, props }) => (
                              <Route key={path} exact path={path}>
                                  <Component {...props} />
                              </Route>
                          ))}
                          <Redirect to="/signin" />
                      </Switch>
                  </Router>
              </header>
            </div>
          </ThemeProvider>
  );
}

export default App;
