import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import AddMovie from './component/AddMovie'
import UpdateMovie from './component/UpdateMovie'
import DarkMode from './component/DarkMode'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={App}>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route path="/login">
              <Header navbar="bg-dark" />
              <Login />
            </Route>
            <Route path="/register">
              <Header navbar="bg-dark" />
              <Register />
            </Route>
            <Route path="/dashboard">
              <Header navbar="bg-dark" />
              <Dashboard />
            </Route>
            <Route path="/add-movie">
              <Header navbar="bg-dark" />
              <AddMovie />
            </Route>
            <Route path="/update-movie">
              <Header navbar="bg-dark" />
              <UpdateMovie />
            </Route>
            <DarkMode />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
