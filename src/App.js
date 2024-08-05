import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState(['Trabajo', 'Personal', 'Otros']);
  const [filteredCategory, setFilteredCategory] = useState('Todas');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const filteredNotes = filteredCategory === 'Todas'
    ? notes
    : notes.filter(note => note.category === filteredCategory);

  return (
    <div className="App">
      <h2 className="text-center mt-4">Notes App</h2>
      <h5 className="text-center">Organiza tus tareas e ideas 📘✍️</h5>


      <NoteForm addNote={addNote} categories={categories} />
      <CategoryFilter categories={categories} setFilteredCategory={setFilteredCategory} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
