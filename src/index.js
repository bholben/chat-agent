import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './app/registerServiceWorker';
import './app/global-styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
