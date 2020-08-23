import React, { Component, createContext } from "react";
import {auth} from "../services/firebase";
import { Redirect } from "react-router-dom";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {

    state = {
        user: null
    };

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            this.setState({user: userAuth});
        });
    };

    render() {
        if (this.state.user) {
            return (
                <UserContext.Provider value={this.state.user}>
                    {this.props.children}
                    <Redirect to="/dashboard"/>
                </UserContext.Provider>
            );
        } else {
            return (
                <UserContext.Provider value={this.state.user}>
                    {this.props.children}
                    <Redirect to="/signin"/>
                </UserContext.Provider>
            );
        }
    }
}

export default UserProvider;
