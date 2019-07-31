import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            demo : ''
        }
    }
    render(){
        return <div>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                Sign Up
                 </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <TextField
                    id="standard-with-placeholder"
                    label="Email"
                    placeholder="Email"
                    className={'textfield '}
                    margin="normal"
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <TextField
                    id="standard-with-placeholder"
                    label="Password"
                    placeholder="Password"
                    className={'textfield '}
                    margin="normal"
                    type="password"
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <TextField
                    id="standard-with-placeholder"
                    label="Country"
                    placeholder="Country"
                    className={'textfield '}
                    margin="normal"
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Button color="primary"
                    label='Sing Up'>
                    Sign Up
                        </Button>
            </Grid>
            </div>
    }
}

export default Signup