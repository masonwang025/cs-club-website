import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Challenge from "./Challenge";

// Generate Order Data
function createData(name, statement, points, solved) {
    return { name, statement, points, solved};
}

const rows = [
    createData('hackerrank-solve',
        <p>Solve <Link href="https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?h_r=next-challenge&h_v=zen">Climbing the Leaderboard</Link> on Hackerrank</p>, '50', true),
    createData('grep-away', <p>Can you find the flag in this mess of folders?</p>, '50', false),
    createData('coffer-overflow-0', <p>Pwn this C program.</p>, '20', false),
];

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
}));

export default function Challenges() {
    const classes = useStyles();
    return <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3} justify={"center"}>
            {rows.map((row)=>(
                <Challenge name={row.name} statement={row.statement}
                points={row.points} solved={row.solved}/>
            ))}
        </Grid>
    </Container>
}
