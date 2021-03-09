import Navbar from './components/Navbar'
import Movies from './components/Movies'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import {useState, useEffect} from 'react'
import Spinner from './components/Spinner'
import Pagination from './components/Pagination'




function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [show, setShow] = useState(false)



  const SEARCHMOVIE = 'https://api.themoviedb.org/3/search/movie?api_key=dd132df044d85760fdd79f3192642f6a&query='
  
  useEffect(() => {

    setLoading(true)
    setShow(false)

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=dd132df044d85760fdd79f3192642f6a&language=en-US&page=${currentPage}`)
      .then(data => data.json())
      .then(res => {
        setMovies(res.results)
        setLoading(false)
        setShow(true)
      })
  }, [])



  const handleSubmit = (e) => {
      e.preventDefault()

        if(search === ''){
          
        }else{
          setLoading(true)

          fetch(SEARCHMOVIE + search)
          .then(data => data.json())
          .then(res => {
            setMovies(res.results)
            setSearch('')
            setLoading(false)
         })
        } 

        console.log(movies)
  }

  //Logic
  const indexOfLastPost = currentPage * postsPerPage 
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost = movies.slice(indexOfFirstPost, indexOfLastPost )
   
  const handleClick = (e) => {
    e.preventDefault()
    setPostsPerPage(20)
    setShow(false)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="nav-container" onClick={() => window.scroll(0,0)}>
              <Navbar />
              <form onSubmit={handleSubmit} >
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" id="search" placeholder="Search movie"/>
              </form>
            </div>
             {loading && <Spinner />}
           <Movies datas={currentPost}/>
          </Route>
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
        {show && <button className="showMore" onClick={handleClick}>Load</button>}
        <Pagination />
      </div>
    </BrowserRouter>
  );
}

export default App;
