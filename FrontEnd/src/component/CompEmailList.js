import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

class CompEmailList extends Component{
    render() {
        const { emails } = this.props;

        return (
            <div className="emailList">
                {
                    emails.map((email) => (
                        <Grid container key={email.id}>
                            <Grid item xs={4}>
                                {email.sender}
                            </Grid>
                            <Grid item xs={8}  >
                                <Link>{email.title}</Link>
                            </Grid>
                        </Grid>
                    ))
                }
            </div>
        );
    }
}
export default CompEmailList;