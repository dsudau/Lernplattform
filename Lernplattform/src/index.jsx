import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';

import './styles.css';

const domTarget = document.querySelector('#lernplattform-app');

ReactDOM.render(<App />, domTarget);