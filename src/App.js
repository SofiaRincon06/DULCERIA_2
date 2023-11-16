import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/auth/login';
import Pagina1 from './paginas/auth/pagina1';

function App() {
  return (
   <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/" exact element={<Pagina1/>}/>
       
      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;
