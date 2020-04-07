import React from 'react';

import { Router } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Header from './Header/Header'
import history from './history'
import PageRoutes from './routes'


const App = () => {
    return(
        <Router history={history}>
            <Header/>
            <PageRoutes/>
            <GlobalStyle/>
        </Router>
    );
}

export default App