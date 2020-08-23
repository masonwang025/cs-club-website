import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Directions';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        backgroundColor: '#2f2f2f'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function Challenge({name, statement, points, solved}) {
    const classes = useStyles();
    if (solved) {
        return (
            <Grid item xs={12}>
                <Paper className={classes.paper} style={{textAlign: 'left', backgroundColor: "#333"}}>
                    <Grid container spacing={3} justify={"center"}>
                        <Grid item xs={12} lg={11}>
                            <Title>{name} ({points} Points)</Title>
                            <Typography variant="body1">{statement}</Typography>
                        </Grid>
                        <Grid item xs={12} lg={1}>
                                    <CheckCircleIcon color="primary" style={{fontSize: "60px"}}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    } else {
        return (
            <Grid item xs={12}>
                <Paper className={classes.paper} style={{textAlign: 'left'}}>
                    <Title>{name} ({points} Points)</Title>
                    <Typography variant="body1">{statement}</Typography>

                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Enter flag"
                            inputProps={{'aria-label': 'flag'}}
                        />
                        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                            <DirectionsIcon/>
                        </IconButton>
                    </Paper>
                </Paper>
            </Grid>
        );
    }
}
