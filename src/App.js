import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme';
import SignIn from "./pages/SignIn";
import Register from "./pages/Register"
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserProvider from "./providers/UserProvider";

function App() {
    const routes = [
        { path: "/dashboard", Component: Home },
        { path: "/challenges", Component: Home },
        { path: "/leaderboard", Component: Home },
        { path: "/signin", Component: SignIn },
        { path: "/register", Component: Register }
    ]
  return (
      <Router>
          <ThemeProvider theme={theme}>
            <div className="App">
              <header className="App-header">
                  <UserProvider>
                      <Switch>
                          {routes.map(({ path, Component, props }) => (
                              <Route key={path} exact path={path}>
                                  <Component {...props} />
                              </Route>
                          ))}
                          <Redirect to="/signin" />
                      </Switch>
                  </UserProvider>
              </header>
            </div>
          </ThemeProvider>
      </Router>
  );
}

export default App;
