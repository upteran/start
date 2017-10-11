import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App.js';
import configureStore from './store/configureStore.js';

import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

render(
	<Provider store={store}>
		<BrowserRouter>
		    <App />
	    </BrowserRouter>
	</Provider>,
	document.getElementById('app')
)
