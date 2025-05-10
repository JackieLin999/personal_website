import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router basename="/">
            <App />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
