import React, {Component, createContext} from "react";
import {auth, db} from "../services/firebase";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import {GlobalContext} from "./GlobalProvider";

export const UserContext = createContext({ user: null, doc: null});

// Generate Order Data
function createData( name, timestamp, topic, points) {
    return { name,  timestamp, topic, points};
}

class UserProvider extends Component {
    static contextType = GlobalContext;

    constructor (props) {
        super(props);
        this.state = {
            user: null,
            doc: null,
            solvedChallenges: [],
            solved: new Set(),
            challengesLoaded: false
        };


    }
    componentDidMount() {
        auth.onAuthStateChanged(userAuth => {
            this.setState({user: userAuth});
            if (userAuth) {
                db.collection("users").doc(userAuth.uid)
                    .onSnapshot((doc) => {
                        this.setState({doc: doc})
                        if (!doc.exists) {
                            return;
                        }
                        if (this.state.doc.data().solvedChallenges.length === 0) {
                            this.setState({challengesLoaded: true});
                        }
                        this.state.doc.data().solvedChallenges.forEach((challenge, index) => {
                            db.collection("globals/data/challenges")
                        .doc(challenge.name).get().then((challengeDoc) => {
                                this.setState((state) => {
                                        state.solvedChallenges[index] = createData(
                                            challenge.name,
                                            challenge.timestamp,
                                            challengeDoc.data().topic,
                                            challengeDoc.data().points
                                        );
                                        state.solved.add(challenge.name);
                                    console.log(state.solvedChallenges);
                                    console.log(doc.data().solvedChallenges);
                                    if (state.solvedChallenges.length === doc.data().solvedChallenges.length) {
                                            state.challengesLoaded = true;
                                        }
                                        return state;
                                    }
                                );
                            });
                        });
                    });
            }
        });
        };


    render() {
        if (this.state.user) {
            if (this.state.doc && this.state.doc.exists) {
                if (this.context.data) {
                    return <React.Fragment>
                            <Route key="/signin" exact path="/signin">
                                <Redirect to="/dashboard"/>
                            </Route>
                    <Route key="/register" exact path="/register">
                        <Redirect to="/dashboard"/>
                    </Route>
                    <Route key="/" path="/">
                        <UserContext.Provider
                            value={this.state}>{this.props.children}</UserContext.Provider>
                    </Route>
                    </React.Fragment>
                } else {
                            return <div/>
                        }

            }
            console.log("here");
            return (
                <UserContext.Provider value={this.state}>
                    <Loading timeout={3500}>
                        {this.props.children}
                        <Redirect to="/register"/>
                    </Loading>
                </UserContext.Provider>
            );
        } else {
            return (
                <UserContext.Provider value={this.state}>
                        <Loading timeout={3500}>
                    {this.props.children}
                    <Redirect to="/signin"/>
                    </Loading>
                </UserContext.Provider>
            );
        }
    }
}

export default UserProvider;
