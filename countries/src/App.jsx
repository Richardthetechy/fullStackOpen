import axios from 'axios'
import { useEffect, useState } from 'react'
import Country from './components/Country'
import Weather from './components/Weather'
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    if (searchTerm === ''){
      setResults([])
      return
    }
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => {   
      const filter = res.data.filter(country => country.name.common.toLowerCase().startsWith(searchTerm.toLocaleLowerCase()))
      setResults(filter)
    })
  }, [searchTerm])
  return (
    <>
    <div>
      find Country <span> </span>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {results.length > 10 && <p>Too many matches, specify another filter</p>}
      {results.length > 1 && (
        <ul>
          {results.map(result => <li key={result.name.common}>{result.name.common} <button onClick={() => setSelectedCountry(result)}
          >SHOW</button></li>)}
        </ul>
      )}
      {(selectedCountry && results.length !== 1) && (
        <>
          <Country result={selectedCountry}/>
          <Weather city={selectedCountry.capital[0]} />
        </>
      )}
      {results.length === 1 && (
        <>
        <Country result={results[0]}/>
        <Weather city={results[0].capital[0]} />
        </>
      )}
    </div>
    </>
  )
}

export default App
