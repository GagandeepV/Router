import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import Profile from './components/Profile';
import Shop from './components/Shop';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/profile' component={Profile} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
  )
}

export default App;
