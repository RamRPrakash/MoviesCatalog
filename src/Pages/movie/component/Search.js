import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import '../../../App.css'

import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


class Search extends Component {
    state = {
        drp: 'user-1'
    }

    handleChange = ({ target }) => this.setState({
        drp: target.value
    })



    render() {
        let { drp } = this.state;

        // Actions
        let { handleChange } = this;
        return (
            <Grid container style={{ alignItems: 'flex-end' }} spacing={3} >
                <Grid item md={2} >
                    <b> Movie catalog</b>
                </Grid>
                <Grid item md={5} >
                    <div>

                        <TextField
                            id="standard-with-placeholder"
                            label="Movie"
                            placeholder="Search the movie name"
                            className={'textfield '}
                            margin="normal"
                            style={{ width: '100%', margin: 0 }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                this.props.contentHolder['searchData'] = e.target.value

                                this.props.onSearch(e.target.value)
                            }}
                        />
                    </div>
                </Grid>
                <Grid item md={5} >
                    <FormControl style={{ width: '100%' }}>
                        <Select
                            style={{ width: '100%', textAlign: 'left' }}
                            value={drp}
                            onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                        >
                            <MenuItem value={'user-1'}>User 1</MenuItem>
                            <MenuItem value={'user-2'}>User 2</MenuItem>
                            <MenuItem value={'user-3'}>User 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


            </Grid>
        )
    }
}
export default Search 