import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomButton from './components/CustomButton/CustomButton';
import RestaurentCard from './components/RestaurentCard/RestaurentCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"*"} element={<Login />}> </Route>
          <Route path="/RestaurentCard" element={<RestaurentCard/>}></Route>
      </Routes>
    </BrowserRouter>
       
    // <div className="App">
    //   <header className="App-header">
    //     <h1>REACT JS BY SIRIUS</h1>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
