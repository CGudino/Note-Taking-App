import React, { Component } from 'react';

export class Notes extends Component {
    render() {
        return (
            <div className='note'>
                <div className='note-text'>
                    <h1 onClick={this.props.onClick}>{this.props.note}</h1>
                </div>

                <i  id='delete'
                    className="fa fa-trash-o fa-3x"
                    onClick={this.props.deleteClick}></i>
            </div>
        );
    }
}