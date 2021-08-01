import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './stylesheet/app.css';
import Container from '@material-ui/core/Container';


import Navbar from './Navbar';
import Landing from './Landing';
import Dashboard from './userComponents/Dashboard';
import Register from './authComponents/Register';
import Login from './authComponents/Login';


const App = () => {

  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Container>
        <Route path='/' exact component={Landing} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;