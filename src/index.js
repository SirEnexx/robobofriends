import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robobots} from './robobots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Card id={robobots[0].id} name={robobots[0].name} email={robobots[0].email}/>
    <Card id={robobots[1].id} name={robobots[1].name} email={robobots[1].email}/>
    <Card id={robobots[2].id} name={robobots[2].name} email={robobots[2].email}/>
  </div>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
