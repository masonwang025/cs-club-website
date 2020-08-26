import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Challenge from "./Challenge";
import {UserContext} from "../providers/UserProvider";
import {GlobalContext} from "../providers/GlobalProvider";
import {CircularProgress} from "@material-ui/core";

// Generate Order Data
function createData(name, statement, links, points, solved) {
    return { name, statement, links, points, solved};
}

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    loader: {
        marginTop: theme.spacing(4),
    }
}));

export default function Challenges() {
    const classes = useStyles();
    const challenges = useContext(GlobalContext).challenges;
    const solved = useContext(UserContext).solved;
    const challengesLoaded = useContext(UserContext).challengesLoaded;
    if (!challengesLoaded) {
        return <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3} justify={"center"}>
                <CircularProgress/>
            </Grid>
        </Container>
    }

    const rows = [];
    for (let name in challenges) {
        let c = challenges[name];
        rows.push(createData(name, c.statement, c.links, c.points, solved.has(name)));
    }
    return <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3} justify={"center"}>
            {rows.map((row)=>(
                <Challenge key={row.name} name={row.name} statement={row.statement} links={row.links}
                points={row.points} solved={row.solved}/>
            ))}
        </Grid>
    </Container>
}
