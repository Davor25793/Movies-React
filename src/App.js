import Navbar from './components/Navbar'
import Movies from './components/Movies'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

function App() {

  

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Movies />
          </Route>
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
