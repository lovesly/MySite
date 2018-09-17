import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Middle from './Middle';

ReactDOM.render(<Middle />, document.getElementById('root'));


registerServiceWorker();

// question, in Andrew's course, we use babel to compile jsx/es6, 
// it feels like everything works fine without babel???
// how do we transform jsx in this course? create-react-app does it, stupid.