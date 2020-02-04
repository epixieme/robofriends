import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Card from './Card';
import CardList from './CardList'
import 'tachyons'
import {robots} from './robots' // because this file is not using export default and just default we need to use brackets
                                //for destructuring. if the  robots js had another variable could write it like 
                                // {robots,cats,mice}
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
