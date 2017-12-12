import React, { Component } from 'react';

export class Header extends Component {
    render() { 
        return (
            <div id='header'>
                <span onClick={this.props.onClick}>{this.props.userName}</span>
            </div>
        );
    }
}