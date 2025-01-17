import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Field } from './App';

const text = "Hello World!!!"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Field />
  </>
);