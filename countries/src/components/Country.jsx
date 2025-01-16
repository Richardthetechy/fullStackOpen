const Country = ({result}) => {
    return (
        <>
            <h1>{result.name.common}</h1>
            <p>Capital: {result.capital[0]}</p>
            <p>Area {result.area}</p>
            <ul>
                {result.languages && Object.values(result.languages).map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img src={result.flags.png}
                alt={`Flag of ${result.name.common}`}
                />
        </>
    )
}

export default Country