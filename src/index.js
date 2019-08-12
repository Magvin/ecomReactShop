import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './components/header/header.component';


ReactDOM.render(
    <BrowserRouter>
        <Header/>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
