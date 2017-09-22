import React, { Component } from 'react';
import getFriends from '../../controller/controller'
export default class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            friends:[]
        }
    }
    componentDidMount(){
        this.setState({
            friends: [...this.state.friends, getFriends]
        })
    }
    render() {
        const friendsList=this.state.friends
        console.log(this.state.friends)
        return (
            <div>
                c
                <div className="friends-container">
                    {}
                </div>
            </div>
        );
    }
}
