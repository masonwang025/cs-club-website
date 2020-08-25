import React, { Component, createContext } from "react";
import {auth, db} from "../services/firebase";
import { Redirect } from "react-router-dom";
import Loading from "../components/Loading";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user: null,
            doc: null
        };


    }
    componentDidMount() {
        auth.onAuthStateChanged(userAuth => {
            this.setState({user: userAuth});
            if(userAuth) {
                db.collection("users").doc(userAuth.uid)
                    .onSnapshot((doc) => {
                        this.setState({doc: doc})
                        console.log(doc);
                    });
            }
        });
        auth.getRedirectResult().then( result => {
            // The firebase.User instance:
            this.setState({user: result.user});
        }, function(error) {
        });
    };


    render() {
        if (this.state.user) {
            return (
                <UserContext.Provider value={this.state}>
                    <Loading>
                    {this.props.children}
                    <Redirect to="/register"/>
                    </Loading>
                </UserContext.Provider>
            );
        } else {
            return (
                <UserContext.Provider value={this.state}>
                    <Loading>
                    {this.props.children}
                    <Redirect to="/signin"/>
                    </Loading>
                </UserContext.Provider>
            );
        }
    }
}

export default UserProvider;
