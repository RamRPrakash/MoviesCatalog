import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import '../../../App.css'
import Card from '@material-ui/core/Card';
import { grey } from '@material-ui/core/colors';


class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            demo: ''
        }
    }

    render(){
        return <div >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Card className={"card cardWidth"}>
               
                    <div> 
                        
                    <TextField
                        id="standard-with-placeholder"
                        label="Movie"
                        placeholder="Search the movie name"
                        className={'textfield '}
                        margin="normal" 
                        width = '300px'
                        onChange={(e)=>{
                            console.log(e.target.value)
                            this.props.contentHolder['searchData'] = e.target.value

                            this.props.onSearch(e.target.value)
                        }}
                    />
                    </div>
                </Card>
                </Grid>
            </div>
    }
}
export default Search 