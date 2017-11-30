import React, { Component } from 'react';

export class NoteHeader extends Component {
    render() {
        return (
            <div id='note-header'>
                <div>
                    <input id='note-input' type='text' placeholder='Write a new note...' onChange={this.props.onChange} onKeyPress={this.props.onKeyPress} />
                </div>

                <div id='add' className='w3-xxlarge'>
                    <i className="fa fa-plus" onClick={this.props.onClick}></i>
                </div>
            </div>
        );
    }
}