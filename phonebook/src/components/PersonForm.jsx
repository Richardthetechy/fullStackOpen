const PersonForm = ({newName, newNumber, habdleSubmit, handleNameChange, handleNumberChange}) => {
    return (
        <form onSubmit={habdleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm