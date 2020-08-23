import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

// Generate Order Data
function createData(id, rank, name, grade, score) {
    return { id, rank, name, grade, score};
}

const rows = [
    createData(0, '1', 'rohankk', '12', 50),
    createData(1, '2', 'cararra', '12', 50),
    createData(2, '3', 'andulu', '12', 40),
    createData(3, '4', 'laze', '9', 30),
    createData(4, '5', 'deathbringer', '12', 30),
    createData(5, '6', 'rohankk', '12', 0),
    createData(6, '7', 'cararra', '12', 0),
    createData(7, '8', 'andulu', '12', 0),
    createData(8, '9', 'laze', '9', 0),
    createData(9, '10', 'deathbringer', '12', 0),
];

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        width: '100%',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Leaderboard() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.paper}>
        <React.Fragment>
            <Title>Leaderboard</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell align="right">Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.rank}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.grade}</TableCell>
                            <TableCell align="right">{row.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
            </div>
        </React.Fragment>
                </Paper>
        </Container>
    );
}
