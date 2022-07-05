import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import Profile from './components/Profile';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
  )
}

export default App;
