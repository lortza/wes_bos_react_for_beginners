// Load React
import React from 'react';
// Load the DOM interfacer
import { render } from 'react-dom';
import Router from './components/Router'
import "./css/style.css";


// Render the output of StorePicker with a self-closing tag.
// Use regular JS to indicate the output DOM location
render(<Router />, document.querySelector('#main'))
