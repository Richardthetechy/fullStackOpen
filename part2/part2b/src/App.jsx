import { useState, useEffect } from 'react'
import Note from './components/Note'
import {getAll, create, update} from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    getAll()
    .then(initialNode =>{
 
      setNotes(initialNode)
    })
  }
  useEffect(hook, [])


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random < 0.5,
    }
    create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  
  }


  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const notesToShow = showAll 
    ? notes 
    : notes.filter(note => note.important)


  const toggleImportanceof = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changeNotes = {...note, important: !note.important}

    
    update(changeNotes.id , changeNotes)
    .then(returnedNode =>{
      setNotes(notes.map(n => n.id === id ? returnedNode : n))
    })
    .catch(err => {
      alert(`the note ${note.content} has been deleted`)
      setNotes(notes.filter(n => n.id !== id))
    })
  }
  return (
    <div> 
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'all' : 'important'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => {toggleImportanceof(note.id)}} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App