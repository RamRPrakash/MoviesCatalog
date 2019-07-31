import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Search from '../component/Search'
const axios = require('axios');
class Movie extends Component{
    searchData = {}
    viewData = []
    constructor(props) {
        super(props);
        this.state = {
            demo: '' , 
            viewData : [] , 
            newData : []
        }
    }
    componentWillReceiveProps(props){
        console.log(this.searchData , ' will receive props')
    }
    call(data){
        this.setState({ demo : '123'})
        console.log(this.searchData.searchData , 'searchData')
        console.log(this.state.demo, 'demo')
        var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s=' + data.split()+'&page=2' ; 

        axios.get(url)
            .then( (response) =>{
                // handle success
            
              
                if (response.data.Search){
                    this.setState({
                        newData: response.data.Search
                    })
                    
                
                  
               //     this.state.viewData = response.data.Search
                }
               
            })
            .catch(function (error) {
                // handle error
                console.log(error, 'error');
            })
            .finally(function () {
                // always executed
            

            });
    }
    
    search(data){
        console.log('calling ... ' + data)
    }

    render(){
      
        console.log(this.state.newData, 'response response')
        var logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/0*7cVZQWZ7Ve2TpC_d.jpg'


        return <div>
            
            <Search contentHolder={this.searchData} onSearch={(data)=>{
                this.call(data)
            }}/>
            
                        <div>
                <Grid container item xs={12} sm={12} md={12} lg={12}>
                    <Grid container item xs={12} sm={12} md={12} lg={12}>
                    <h3>You Searched for : {this.searchData.searchData}</h3>
                    </Grid>
                    {
                       
                        this.state.newData && this.state.newData.length > 0 ? 
                            this.state.newData.map( (item , index) =>{
                               return <div className='cards'>
                                   <img src={item.Poster ? item.Poster : logo} alt="logo" />
                                   <h4><b>Name   : {item.Title}</b></h4>
                                   <h4><b>Year   : {item.Year}</b></h4>
                                   <h4><b>ImdbID : {item.imdbID}</b></h4>
                                   <h4><b>Type   : {item.Type}</b></h4>
                                </div>
                            }) 
                            :   <div className='cards'>
                                <img src={logo} style={{width : "50%"}} alt="logo" />
                                <p>Please search another movie ..</p><br></br>
                        {/* <h4><b>Name   : {item.Title}</b></h4>
                        <h4><b>Year   : {item.Year}</b></h4>
                        <h4><b>ImdbID : {item.imdbID}</b></h4>
                        <h4><b>Type   : {item.Type}</b></h4> */}
                    </div>
                    }
                        

                </Grid>
                            </div>
</div>
    }
}
export default Movie 