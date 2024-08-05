import React from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote }) {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <Note key={index} index={index} note={note} deleteNote={deleteNote} />
            ))
          ) : (
            <p className="text-center">No notes available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteList;
