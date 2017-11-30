import React, { Component } from 'react';

export class Notes extends Component {
    render() {
        return (
            <div className='note'>
                <h1 style={{maxWidth: '90%'}} onClick={this.props.onClick}>{this.props.note}</h1>

                <div id='delete' className='w3-xxlarge'>
                    <i className="fa fa-trash-o" onClick={this.props.deleteClick}></i>
                </div>
            </div>
        );
    }
}