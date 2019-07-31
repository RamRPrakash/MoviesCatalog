import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state ={
            demo : ''
        }
    }
    render(){
        return (
            <div>
                 <Grid container item xs={12} sm={12} md={12} lg={12}>
                    Sign In 
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
                        id="standard-password-input"
                        label="Password"
                        className={'textfield'}
                        type="password"
                        // autoComplete="current-password"
                        margin="normal"
                    />
                </Grid>
                <Grid container item xs={12} sm={12} md={12} lg={12}>
                    <Grid xs={6} sm={6} md={6} lg={6}>
                        <Button color="primary"
                            label='Sing In'>
                            Sign In
                        </Button>

                    </Grid>
                    {/* <Grid xs={6} sm={6} md={6} lg={6}>
                        <Button color="primary"
                            onClick={() => this.signup()}
                        >
                            Sign Up
                        </Button>
                    </Grid> */}

                </Grid>
                </div>
        )
    }
}

export default Signin ;
