const Person = ({person, deleteFunc}) => {
    return (
        <li>
            {person.name} {person.number}
            <span> </span>
            <button onClick={deleteFunc}>delete</button>
        </li>
    )

} 

export default Person