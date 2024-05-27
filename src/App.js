import {Route, Switch} from 'react-router-dom'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Header from './components/Header'
import Home from './components/Home'
import Features from './components/Features'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="home">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/features" component={Features} />
      <Route exact path="/contact" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
