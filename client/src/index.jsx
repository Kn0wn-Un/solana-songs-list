import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Buffer } from 'buffer';
// eslint-disable-next-line no-undef
globalThis.Buffer = Buffer;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
