import React, { Component } from 'react';
import { HashRouter as Router, Route, withRouter, Switch } from 'react-router-dom';
import Welcomepage from '../Pages/welcomepage/view/Welcomepage'

class Mainpage extends Component{
    constructor(props){
        super(props);
        this.state = {
            demo : ''
        }
    }
    componentWillMount(){
        console.log('calling .....')
    }
    render(){
        return(
            <Router history = {this.props.history}>
                <div>
                    <Switch>
                        <Route exact path='/Welcomepage' Component={Welcomepage} > </Route>
                    </Switch>
                    </div>
                    <div>
                    <button className="loginbutton" type="submit"
                        onClick={() => { this.props.history.push({ pathname: '/Welcomepage' }) }} > APPLY </button>
                        </div>
            </Router>
        )
    }
}
export default Mainpage ;