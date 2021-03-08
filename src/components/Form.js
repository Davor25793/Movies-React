import {useState} from 'react'
import Movies from './Movies'

const Form = () => {

  const SEARCHMOVIE = 'https://api.themoviedb.org/3/search/movie?api_key=dd132df044d85760fdd79f3192642f6a&query='

  const [search, setSearch] = useState('')

  const input = document.querySelector('#search')

  console.log(search)

  const handleSubmit = (e) => {
    e.preventDefault()
    const term = input.value;

    fetch(SEARCHMOVIE + term)
      .then(data => data.json())
      .then(res => {
        setSearch(res.results)
        setSearch('')
      })
  }

  console.log(search)


  return (  
    <form onSubmit={handleSubmit}>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} id="search" placeholder="Search movie"/>
    </form>
  );
}
 
export default Form;