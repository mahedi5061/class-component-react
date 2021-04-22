import React, { Component } from 'react'

export default class user extends Component {
    render() {
        return (
            <div>
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}
