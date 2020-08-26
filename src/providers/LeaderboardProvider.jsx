import React, { Component, createContext } from "react";
import {db} from "../services/firebase";

export const LeaderboardContext = createContext({ users: {} });

class LeaderboardProvider extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: {}
        };


    }
    componentDidMount() {
        db.collection("leaderboard").onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
                let doc = change.doc;
                let data = doc.data();
                    this.setState((state) => {
                        state.users[doc.id] = data;
                        return state;
                    })
            });
        });
    };


    render() {
        return (
            <LeaderboardContext.Provider value={this.state}>
                {this.props.children}
            </LeaderboardContext.Provider>
        );
    }
}

export default LeaderboardProvider;
