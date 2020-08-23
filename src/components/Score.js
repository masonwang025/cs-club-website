import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    score: {
            fontSize: "80px"
    },
    depositContext: {
        flex: 1,
    },
});

export default function Score() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Your Score</Title>
            <Typography component="p" variant="h1" className={classes.score}>
                200
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                of 1500 possible points
            </Typography>
            <div>
                <Link color="primary" variant="body2" href="#" onClick={preventDefault}>
                    View leaderboard
                </Link>
            </div>
        </React.Fragment>
    );
}