import React, { Component } from 'react';
import{ Grid } from '@material-ui/core';
import { Email, Title } from '@material-ui/icons'

class CompEmail extends  Component{
    render() {
        const { email} = this.props;
        return(
            <Grid container>
                <Grid item xs ={3}>
                    <p> <Email /> {email.sender} </p>
                    <p> <Title />  {email.title} </p>
                </Grid>
                    <Grid item xs={6}>
                    <p> {email.body} </p>
                </Grid>
            </Grid>
        );
    }
}

export default CompEmail;