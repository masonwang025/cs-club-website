import React, {useContext} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {UserContext} from "../providers/UserProvider";
import {Link as RouterLink} from "react-router-dom";

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatTimestamp (timestamp) {
    let date = new Date(timestamp.seconds * 1000);
    console.log(date);
    console.log(timestamp);
    return `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
}


const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function SolvedChallenges() {
    const classes = useStyles();
    const userState = useContext(UserContext);
    let rows = userState.solvedChallenges.reverse().slice(0, 10);

    return (
        <React.Fragment>
            <Title>Solved Challenges</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Topic</TableCell>
                        <TableCell align="right">Points Earned</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell>{formatTimestamp(row.timestamp)}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.topic}</TableCell>
                            <TableCell align="right">{row.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" variant="body2" component={RouterLink} to="/challenges">
                    See more
                </Link>
            </div>
        </React.Fragment>
    );
}