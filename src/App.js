import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header.jsx';
import { NoteHeader } from './components/NoteHeader.jsx';
import { Notes } from './components/Notes.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      notes: [],
      activeNote: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.noteClick = this.noteClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Enter triggers handleClick()
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  // Sets input as state so it can be used to create new Notes component
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  // Creates new note with input
  handleClick() {
    if (this.state.input.length > 0) {
      this.setState({
        notes: this.state.notes.concat(<Notes note={this.state.input} onClick={this.noteClick} deleteClick={this.handleDelete} />),
        input: ''
      });
      document.getElementById('note-input').value = '';
    } else {
      alert('Please write a note');
    }
  }

  // Sets the note that was clicked as the active note
  noteClick(e) {
    this.setState({
      activeNote: e.currentTarget.textContent
    });
  }

  // Deletes note that was clicked
  handleDelete() {
    alert('Delete functionality coming soon!');
  }

  render() {
    return (
      <div id='app'>
        <Header />

        <div id='page-content'>

          {/* Holds menu that displays the different notes */}
          <div id='note-menu'>
            <NoteHeader onChange={this.handleChange} onClick={this.handleClick} onKeyPress={this.handleKeyPress} />

            {/* Notes go here */}
            <ul id='notes-list'>
              {this.state.notes.map((note, key) =>
                <div key={key}>
                  {note}
                </div>
              )}
            </ul>

            {/* Clears all the notes currently on page */}
            <h3 id='clear' onClick={()=> {
              this.setState({
                notes: [],
                activeNote: ''
              });
            }}>
              <hr/>
              Clear all
            </h3>
          </div>

          {/* Displays the note that has been selected */}
          <div id='active-note'>
            {this.state.activeNote}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
