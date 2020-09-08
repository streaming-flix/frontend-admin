// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// // import { Provider } from "react-redux";
// // import store from "./redux/store";

// // import PrivateRoute from "./helpers/PrivateRoutes";
// import LoginAdmin from './components/LoginAdmin';
// import FormAddMovie from './components/FormAddMovie';
// import FormEditMovie from './components/FormEditMovie';
// import Sidebar from './components/Sidebar';

// function App() {
//     return (
//         // <Provider store={store}>
//             <Router>
             
//                     <Route exact path="/">
//                         {/* <LoginAdmin /> */}
//                         {/* <FormAddMovie /> */}
//                         {/* <FormEditMovie /> */}
//                         <Sidebar />
//                     </Route>
                    
//             </Router>
//         // </Provider>
//     );
// }

// export default App;
import React from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar";
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import LoginAdmin from './components/LoginAdmin';
import AddMovie from './components/FormAddMovie';
import EditMovie from './components/FormEditMovie';

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
          <Container>
                <AppRouter/>
          </Container>
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