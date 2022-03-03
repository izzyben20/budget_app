import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';
import { useStyles } from './styles';
import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
   
    return (
        <Card className={classes.root}>
            <CardHeader align="center" title="Income-Expense Tracker" subheader="Track your earnings & expenses" />
            <CardContent>
                <Typography variant='h5' align='center'>Total balance: ${balance}</Typography>
                <Divider className={classes.divider} />
                <Form /> 
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
