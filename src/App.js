import Navbar from './components/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;
