const Filter = ({searchName, handleSearchName, persons}) => 
    {
    const isfoundIndex = persons.findIndex(person => person.name.toLowerCase() === searchName.toLowerCase())
    return(
        <>
            filter shown with <input value={searchName} onChange={handleSearchName}/>
            <div>
            {
            isfoundIndex !== -1
            ? <li>{persons[isfoundIndex].name}</li>
            : <br />
            }
            </div>
      </>
    )
}
export default Filter