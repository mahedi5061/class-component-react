import React, { Component } from 'react';
import User from '../User'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>this.setState({users:data}))
    }
    render() {
        return (
            <div>
                <h2>users{this.state.users.length}</h2>
                {
                    this.state.users.map(user=><User user={user}></User>)
                }
            </div>
        )
    }
}
