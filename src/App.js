import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'
import AddProduct from './component/AddProduct'
import UpdateProduct from './component/UpdateProduct'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={App}>
            <Header />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/add-movie">
              <AddProduct />
            </Route>
            <Route path="/update-movie">
              <UpdateProduct />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
