import React from 'react';
import './App.css';
import NavBar from "./components/Navbar";
import { Provider } from 'react-redux';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import LoginAdmin from './components/LoginAdmin';
import AddMovie from './components/FormAddMovie';
import EditMovie from './components/FormEditMovie';
import ListUser from './components/ListUserComponent';

function App() {
  return (
      <div>
          <Provider store={createStore(reducers, applyMiddleware(thunk))}>
          
              <Router>
              <Route exact path="/">
            <LoginAdmin/>
          </Route>
          <Route exact path="/pageAdmin">
            <NavBar/>
            <ListUser/>
          </Route>
          <Route exact path="/AddMovie">
          <NavBar/>
            <AddMovie/>
          </Route>
          <Route exact path="/EditMovie">
          <NavBar/>
            <EditMovie/>
          </Route>
              </Router>
          
          </Provider>
      </div>
  );
}

export default App;