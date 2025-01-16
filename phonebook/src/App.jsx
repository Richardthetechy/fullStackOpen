import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Notification from './components/Notification'
import { getAll, create, deletePerson, update } from './services'
import NotificationErr from './components/NotificationErr'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState(null)
  const [errmessage, setErrMessage] = useState(null)
  const hook = () => {
              getAll()
              .then(allPersons => {
                setPersons(allPersons)
              })
            }

  useEffect(hook, [])
  const handleSearchName = (e) => {
    setSearchName(e.target.value)
  }

  
  const handleNameChange = (e) => { 
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const habdleSubmit = (e) => {
    e.preventDefault()
    const new_obj = {
      name: newName,
      number: newNumber
    }
    const isfound = persons.some(person => person.name === newName)
    if (isfound) {
      const person = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
      if (window.confirm(`${person.name} already exist! Do you want to change ${person.name} number`)) {
        const newPerson = {...person, number: newNumber}
        update(person.id, newPerson)
        .then(obj => {
          setPersons(persons.map(p => p.id === newPerson.id ? obj : p))
        })
        .catch(err => {
          setErrMessage(`information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setErrMessage(null)
          }, 3000);
        })
      }
    }
    else {
      setMessage(`${newName} add`)
      setTimeout(() => {
        setMessage(null)
      }, 3000);
      create(new_obj)
      .then(newObject => {
        setPersons(persons.concat(newObject))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const onDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if(window.confirm(`Delete ${person.name} ?`)){
      deletePerson(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
    }
    )
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <NotificationErr message={errmessage} />
      <Filter searchName={searchName} handleSearchName={handleSearchName} persons={persons} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} habdleSubmit={habdleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return (
            <Person key={person.name} person={person} deleteFunc={() => onDelete(person.id)}/>
          )
        })}
      </ul>
    </div>
  )
}

export default App
