import React from 'react';
import { Container } from '@material-ui/core';
import {  BrowserRouter, Routes , Route } from 'react-router-dom';


import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';



const App = () =>{
    
    return(
        <BrowserRouter>
            <Container maxidth ="lg">
                <Navbar />
                    <Routes >
                        
                        <Route path='/auth' exact element={<Auth/>}  />
                        <Route path='/' exact element={<Home/>}  />
                    </Routes >
            </Container>
        </BrowserRouter> 
    );
}

export default App;