import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './helloWorld';
import reportWebVitals from './reportWebVitals';
import {Say, Seed} from './Say';
import Clock from './Clock';
let ticks = function tick() {

    ReactDOM.render(
        <Clock name="小猪"/>,
        document.getElementById('root')
    );
}

setInterval(ticks, 1000);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <Hello />
//     <Seed name={"小猪"} user={User} />
//     <Say />
//   </React.StrictMode>,
//   document.getElementById('root')
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
