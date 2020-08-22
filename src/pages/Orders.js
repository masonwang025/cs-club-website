import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, topic, points) {
    return { id, date, name, topic, points};
}

const rows = [
    createData(0, '16 Mar, 2019', 'hackerrank-solve', 'Algorithms', 50),
    createData(1, '16 Mar, 2019', 'grep-away', 'Systems', 50),
    createData(2, '16 Mar, 2019', 'coffer-overflow-0', 'Cybersecurity', 40),
    createData(3, '15 Mar, 2019', 'fast-and-furious-1', 'Algorithms', 30),
    createData(4, '15 Mar, 2019', 'fast-and-furious-0', 'Algorithms', 30),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();
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
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.topic}</TableCell>
                            <TableCell align="right">{row.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" variant="body2" href="#" onClick={preventDefault}>
                    See more
                </Link>
            </div>
        </React.Fragment>
    );
}