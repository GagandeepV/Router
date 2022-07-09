import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import Profile from './components/Profile';
import Shop from './components/Shop';
import Product from './components/Product';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/shop/product/:id' exact component={Product}/>
        </Switch>
      </div>
  )
}

export default App;
