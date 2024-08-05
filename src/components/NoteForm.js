import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function NoteForm({ addNote, categories }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    addNote({ title, content, category });
    setTitle('');
    setCategory(categories[0]);
    setEditorState(EditorState.createEmpty());
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select">
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Note</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NoteForm;
