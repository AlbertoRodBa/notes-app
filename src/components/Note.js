import React from 'react';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Note({ note, index, deleteNote }) {
  const contentState = convertFromRaw(JSON.parse(note.content));
  const editorState = EditorState.createWithContent(contentState);

  return (
    <div className="note mt-4 p-3 border rounded shadow-sm bg-light">
      <h2 className="text-center">{note.title}</h2>
      <h4>Category: {note.category}</h4>
      <Editor
        editorState={editorState}
        toolbarHidden
        readOnly
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
      />
      <button onClick={() => deleteNote(index)} className="btn btn-danger mt-2">Delete</button>
    </div>
  );
}

export default Note;
