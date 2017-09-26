import React, { Component } from 'react';
import {getFriends} from '../../ducks/user.js'
import {connect} from 'react-redux';
import axios from 'axios'

 class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            friends:[]
        } 
    }
    componentDidMount(){   console.log('his') 
        axios.get('/api/friend/list').then(response=>{
            console.log('lkjfadlskjfasdlk')
            this.setState({
                friends: response.data
            })
           
       })
   
    }
    render() {
        const friendmapper = this.state.friends.map(function(x){
            return (<div><li>{x.firstname}</li></div>)
        })
        return (
            <div>
                <div className="friends-container">
                    <ul>{friendmapper}</ul>
                    'blah'
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        friends: state.friends
    }
}

export default connect(mapStateToProps,{getFriends})(Dashboard)